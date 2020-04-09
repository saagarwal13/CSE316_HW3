var mongoose = require('mongoose');

var LogoSchema = new mongoose.Schema({
  id: String,
  text: String,
  color: String,
  fontSize: { type: Number, min: 5, max: 200 },
  backgroundColor:String,
  borderRadius: { type: Number, min: 0, max: 200 },
  borderWidth: { type: Number, min: 0, max: 200 },
  borderColor:String,
  padding: { type: Number, min: 5, max: 200 },
  margin: { type: Number, min: 0, max: 100 },
  lastUpdate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Logo', LogoSchema);