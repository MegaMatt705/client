const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  title: mongoose.SchemaTypes.string,
  description: mongoose.SchemaTypes.string,
  picture: mongoose.SchemaTypes.string,
  
});

module.exports = mongoose.model('Activities', ActivitySchema);