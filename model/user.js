var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  money: Number,
  password: String,
  collectedItems: []
});

module.exports = mongoose.model('User', userSchema);
