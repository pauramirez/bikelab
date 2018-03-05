var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    provider: {type: String, required: true},
    email:{type: String, required: true},
    provider_id:{type: String, required: true},
    token:{type: String, required: true},
    provider_pic:{type: String, required: true}
},{collection:"users"});

var UserModel = mongoose.model("Users", userSchema);

module.exports = UserModel;