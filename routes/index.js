const express = require('express');
const mongoose = require('mongoose');
const csv = require('csvtojson');
const csvfile = "filetoread.csv";
const router = express.Router();

mongoose.connect('mongodb://localhost/product');
let connection = mongoose.connection;
//handle mongodb error
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
  console.log("Connected to DataBase...");
});

let productSchema = require('../model/productSchema.js');

let Product = mongoose.model('product', productSchema);

let result = {};
csv().fromFile(csvfile).then((jsonObj)=>{
  result = jsonObj;
  connection.collection('Product').insert(result,function(err,doc){
    if(err){
      console.log('Error in insert data');
    }else{
      console.log('Data save in db');
    }
  })
});
module.exports = router;