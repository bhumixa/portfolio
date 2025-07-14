const mongoose = require("mongoose");
const OrderSchema =  new mongoose.Schema({
    date:Date,
    items:Array(),
    status:Number,
})

const Orders = mongoose.model("orders", OrderSchema);
module.exports = Orders;
