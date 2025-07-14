const mongoose = require("mongoose");
const WhishlistSchema =  new mongoose.Schema({
    userId:{type:Schema.Types.ObjectId, ref:'users'},
    productId:Array(String)
})

const Whishlists = mongoose.model("whishlists", WhishlistSchema);
module.exports = Whishlists;