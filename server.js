var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');

var app = express();
var db = 'mongodb://localhost/yardSale';
mongoose.connect(db);

var PORT = process.env.PORT || 3000;

var User = require("./models/user");
var Item = require("./models/item");
var Comment = require("./models/comment");


app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/public/index.html');
});

app.get('/getItems', function(req, res) {
  Item.find({itemSold: 'false'}).exec().then(function(dbItems) {
    console.log(" db items" + dbItems);
    res.json(dbItems);
  });
});

app.post('/login', function(req, res) {
  console.log(req.body.username);
  User.find({name: req.body.username, password: req.body.password}).exec().then(function(dbUser) {
    console.log(" db user" + dbUser);
    res.json(dbUser);
  });
});

app.post('/listItem', function(req, res) {
  console.log(req.body);
  var item = new Item({
    _owner: req.body.owner,
    itemName: req.body.name,
    itemDescription: req.body.description,
    itemPrice: req.body.price,
    itemSold: req.body.sold
  });

  item.save(function(err) {
    if (err) return (err);
  });
});

//*** not working ****
app.post('/postComment', function(req, res) {
  console.log(req.body);
  var comment = new Comment({
    _owner: req.body.owner,
    itemLink: req.body.link,
    commentMsg: req.body.message
  });

  comment.save(function(err) {
    if (err) return (err);
  });
});

//*** not working ****
app.post('/buyItem', function(req, res) {
  console.log(req.body);
  //update the item to idicate it has been purchased
});

app.listen(PORT, function() {
  console.log("listening on port", PORT);
});
