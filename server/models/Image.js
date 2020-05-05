var mongoose = require('mongoose');

var ImageSchema = new mongoose.Schema({
  id: Int,
  url: String
 
  
});

module.exports = mongoose.model('Image', ImageSchema);