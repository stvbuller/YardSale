var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  _owner: {type: Schema.Types.ObjectId, ref: 'User'},
  itemName: String,
  itemDescription: String,
  itemPrice: Number,
  itemSold: Boolean,
  comments:[{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
});

module.exports = mongoose.model('Item', itemSchema);
