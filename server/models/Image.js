var mongoose = require('mongoose');

var ImageSchema = new mongoose.Schema({
  id: Int,
  url: String,
  height: { type: Number, min: 5, max: 500 },
  width:{ type: Number, min: 5, max: 500 },
  
  xpos: { type: Number, min: 0, max: 2000 },
  ypos:{ type: Number, min: 0, max: 2000 },
  
  
});

module.exports = mongoose.model('Image', ImageSchema);