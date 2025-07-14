const mongoose = require("mongoose");
const ProductSchema =  new mongoose.Schema({
    name:String,
    shortDescription:String,
    description:String,
    purchasePrice:Number,
    sellingPrice:Number,
    images:Array(String),
    categoryId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "categories" 
        }
    ]
})

const Products = mongoose.model("products", ProductSchema);
module.exports = Products;
