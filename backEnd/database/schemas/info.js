// Example model for History
const mongoose = require('mongoose');

const InfoSchema = new mongoose.Schema({
  title: String,
  description: String,
  // Add other fields relevant to history
});

module.exports = mongoose.model('Information', InfoSchema);