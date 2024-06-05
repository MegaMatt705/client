// Example model for History
const mongoose = require('mongoose');

const LodgeSchema = new mongoose.Schema({
  title: String,
  description: String,
  // Add other fields relevant to history
});

module.exports = mongoose.model('Lodging', LodgeSchema);