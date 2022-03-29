const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  image:{
    type:String,
    trim:true,
  },
    title: {
      type: String,
      trim:true,
    },
    description: {
      type: String,
      trim:true,
    },
    price: {
      type: Number,
      trim:true,
    },
    unitStock: {
      type: Number,
      trim:true,
    },
    quantity: {
        type: Number,
        trim:true,
    },
    color:[{
      type:String,
      enum:["red", "blue", "black", "gray","orange","white"],
    }]
  },
);

const ProductModel = new mongoose.model("product", ProductSchema);

module.exports = ProductModel;
