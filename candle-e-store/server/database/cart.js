const mongoose = require("mongoose");
const CarttSchema =  new mongoose.Schema({
    userId:{type:Schema.Types.ObjectId, ref:'users'},
    productId:Array(String)
})

const Carts = mongoose.model("carts", CarttSchema);
module.exports = Carts;