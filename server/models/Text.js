var mongoose = require('mongoose');

var TextSchema = new mongoose.Schema({
  id: Int,
  title: String,
  color: String,
  xpos: { type: Number, min: 0, max: 8000 },
  ypos:{ type: Number, min: 0, max: 8000 },
  fontSize: { type: Number, min: 5, max: 200 },
  lastUpdate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Text', TextSchema);