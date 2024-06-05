// Example model for History
const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  title: mongoose.SchemaTypes.string,
  description: mongoose.SchemaTypes.string,
  picture: mongoose.SchemaTypes.string,
  location: mongoose.SchemaTypes.string,
  // Add other fields relevant to history
});

module.exports = mongoose.model('Food', FoodSchema);