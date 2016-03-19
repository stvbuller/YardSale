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


app.listen(PORT, function() {
  console.log("listening on port", PORT);
});
