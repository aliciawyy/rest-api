const mongoose = require('mongoose');

const indexSchema = new mongoose.Schema({
  'indexName': { type: String, index: { unique: true } },
  'indexAssets': [String],
  'Description': String,
  'Allocation': [Number],
});

module.exports.CryptoIndex = mongoose.model('CryptoIndex', indexSchema);
