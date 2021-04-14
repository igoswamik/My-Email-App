require('@babel/register')({
  presets: ['@babel/preset-env'],
  ignore: ['node_modules']
});


const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url ='mongodb+srv://email_app_user:HCcwc9ref42Wz7tL@cluster0.6fnvs.mongodb.net/EmailAppDatabase?retryWrites=true&w=majority' ||'mongodb://localhost:27017';

// Database Name
const dbName = 'EmailAppDatabase';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});

// Import the rest of our application.
module.exports = require('./server.js');
