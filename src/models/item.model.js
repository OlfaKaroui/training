const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let ItemSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Item', ItemSchema);
