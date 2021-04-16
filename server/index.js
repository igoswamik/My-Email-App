require('@babel/register')({
  presets: ['@babel/preset-env'],
  ignore: ['node_modules']
});


/********************************** */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app=express();
const Jsoncollection = require('../models/database');

const dbUrl =process.env.DB_URL ||'mongodb://localhost:27017/EmailAppDatabase';
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

 
/********FACING ISSUE WITH CORS Inside ./server/server.js*************/
// const originUrl=process.env.HOST;
// var corsOptions = {
//   origin: originUrl,
//   optionsSuccessStatus: 200, // For legacy browser support
//   methods: ['GET','POST']
// }

// app.use(cors(corsOptions));

//   app.post("/apireact",(req,res)=>{
//       res.json({
//         message: 'Hello World'
//     });
//   });


// const jsonFile=new Jsoncollection({JSONfile:"this should be stored in your database"});
// jsonFile.save();

/************************************/



// Import the rest of our application.
module.exports = require('./server.js');
