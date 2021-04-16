const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const JsonFileSchema = new Schema({
  JSONfile: String
});

const Jsoncollection= mongoose.model('Jsoncollection', JsonFileSchema);
module.exports=Jsoncollection;