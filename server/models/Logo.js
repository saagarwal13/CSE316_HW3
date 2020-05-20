var mongoose = require('mongoose');

var LogoSchema = new mongoose.Schema({
  id: String,
  logoTitle: String,
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
    xpos:
    {
      type: Number, min: 0, max: 2000 ,
    },
    ypos:
    {
      type: Number, min: 0, max: 2000 ,

    },
    color:
    {
      type:String
    }
  }],
  images:[{
    id:
    {
      type:Number
    },
    url:
    {
      type:String
    },
    xpos:
    {
      type: Number, min: 0, max: 2000 ,
    },
    ypos:
    {
      type: Number, min: 0, max: 2000 ,

    },
    height:
    {
      type: Number, min: 5, max: 500 ,
    },
    width:
    {
      type: Number, min: 5, max: 500 ,

    },
  }],
 
 
  backgroundColor:String,
  borderRadius: { type: Number, min: 0, max: 200 },
  borderWidth: { type: Number, min: 0, max: 200 },
  borderColor:String,
  padding: { type: Number, min: 5, max: 200 },
  margin: { type: Number, min: 0, max: 100 },
  height: { type: Number, min: 50, max: 2000 },
  width: { type: Number, min: 50, max: 2000 },
  lastUpdate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Logo', LogoSchema);