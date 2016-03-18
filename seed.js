
var mongoose = require('mongoose');

//mongoose connection
var db = 'mongodb://localhost/yardSale';
mongoose.connect(db);

var User = require("./models/user");
var Item = require("./models/item");
var Comment = require("./models/comment");

//create a user
var user1 = new User({
  name: John,
  money: 10000,
  password: a,
  collectedItems: ['tire', 'pedal']
});

//save the user
user1.save(function(err) {
  if (err) return (err);
  //create user comments
  var comment1 = new Comment({
    commentMsg: "great frame",
    _owner: user1.id,
    itemLink: "frame"
  });
  comment1.save();
  //create an item
  var item1 = new Item({
    _owner: user1.id,
    itemName: 'frame',
    itemDescription: 'used fuju frame',
    itemPrice: 1000,
    itemSold: false,
  });
  item1.save();
});

