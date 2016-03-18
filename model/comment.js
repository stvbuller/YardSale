var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  _owner: {type: Schema.Types.ObjectId, ref: 'User'},
  itemLink: String,
  commentMsg: String
});

module.exports = mongoose.model('Comment', commentSchema);
