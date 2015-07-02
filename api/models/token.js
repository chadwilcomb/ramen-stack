// Load required packages
var mongoose = require('mongoose');

// Define our token schema
var TokenSchema   = new mongoose.Schema({
  expires: Date
});

// Export the Mongoose model
module.exports = mongoose.model('Token', TokenSchema);
