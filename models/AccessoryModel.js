var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AccessorySchema = new Schema({
    name: {type: String, required: true},
    category:{type: String, required: true},
    brand:{type: String, required: true},
    price:{type: String, required: true},
    description:{type:String, required:true},
    image:{type:String},
    provider:{type:String}
}, {collection: "accessories"});

const AccessoryModel = mongoose.model("Accessory", AccessorySchema);

module.exports = AccessoryModel;