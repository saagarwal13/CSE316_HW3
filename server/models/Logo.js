var mongoose = require('mongoose');

var LogoSchema = new mongoose.Schema({
  id: String,
  text: String,
  texts:[{
    id:{
      type:Number
    },
    title:
    {
      type:String
    },
    fontSize:
    {
       type: Number, min: 5, max: 200 ,
    },
    color:
    {
      type:String
    }
  }],
 
  color: String,
  fontSize: { type: Number, min: 5, max: 200 },
  backgroundColor:String,
  borderRadius: { type: Number, min: 0, max: 200 },
  borderWidth: { type: Number, min: 0, max: 200 },
  borderColor:String,
  padding: { type: Number, min: 5, max: 200 },
  margin: { type: Number, min: 0, max: 100 },
  height: { type: Number, min: 50, max: 100 },
  width: { type: Number, min: 50, max: 100 },
  lastUpdate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Logo', LogoSchema);