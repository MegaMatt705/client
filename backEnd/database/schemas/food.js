// Example model for History
const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  title: String,
  description: String,
  // Add other fields relevant to history
});

module.exports = mongoose.model('Food', FoodSchema);