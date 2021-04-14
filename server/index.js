require('@babel/register')({
  presets: ['@babel/preset-env'],
  ignore: ['node_modules']
});


/********************************** */
const express = require('express');
const mongoose = require('mongoose');
// const Campground = require('../models/campground');

const dbUrl ='mongodb+srv://email_app_user:HCcwc9ref42Wz7tL@cluster0.6fnvs.mongodb.net/EmailAppDatabase?retryWrites=true&w=majority' ||'mongodb://localhost:27017/EmailAppDatabase';
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const Schema = mongoose.Schema;
const JsonFileSchema = new Schema({
  JSONfile: String
});

const Jsoncollection= mongoose.model('Jsoncollection', JsonFileSchema);
module.exports=Jsoncollection;
const jsonFile=new Jsoncollection({JSONfile:"this should be stored in your database"});
jsonFile.save();
/************************************/



// Import the rest of our application.
module.exports = require('./server.js');
