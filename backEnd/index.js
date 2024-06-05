const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoClient = require('mongodb').MongoClient;

const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// Database connection
const uri = "mongodb://localhost:27017/";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log("MongoDB Connected"))
 .catch(err => console.log(err));

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Corn Islands Hub!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));