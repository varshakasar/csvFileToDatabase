var mongoose = require('mongoose');

var product = new mongoose.Schema({
	Product_URL:String,
  Brand_Name: String,
  Product_Name: String,
  Screencapture_Product_Page:String,
  Primary_Product_Image:String,
  Alt_Image_1:String,
  Alt_Image_2:String,
  Product_Description:String,
  Price:String,
  Style_Number:Number,
  Reviews:String,
  Shoppability:Boolean,
  Brand_URL:String,
  Retailer_ID:Number,
  Brand_ID:Number,
  error:String
});

module.exports = product;