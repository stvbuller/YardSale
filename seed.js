
var mongoose = require('mongoose');

//mongoose connection
var db = 'mongodb://localhost/yardSale';
mongoose.connect(db);

var User = require("./models/user");
var Item = require("./models/item");
var Comment = require("./models/comment");

//create a user
var user1 = new User({
  name: 'John',
  money: 10000,
  password: 'a',
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
  var comment2 = new Comment({
    commentMsg: "really great frame",
    _owner: user1.id,
    itemLink: "frame"
  })
  comment1.save(function(err){
    if (err) return (err);
    comment2.save(function(err) {
      if (err) return (err);
    });
  });

  //create an item
  var item1 = new Item({
    _owner: user1.id,
    itemName: 'frame',
    itemDescription: 'used fuju frame',
    itemPrice: 1000,
    itemSold: false
  });
  item1.save(function(err) {
    if (err) return (err);
  });
});

//create a second user
var user2 = new User({
  name: 'Jane',
  money: 20000,
  password: 'b',
  collectedItems: ['light', 'pump']
});

//save the second user
user2.save(function(err) {
  if (err) return (err);
  //create user comments
  var comment1 = new Comment({
    commentMsg: "broken frame",
    _owner: user2.id,
    itemLink: "bmc frame"
  });
  comment1.save();
  //create an item
  var item1 = new Item({
    _owner: user2.id,
    itemName: 'bmc frame',
    itemDescription: 'used bmc frame',
    itemPrice: 2000,
    itemSold: false
  });
  item1.save();
});
