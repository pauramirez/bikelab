var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MailSchema = new Schema({
  name: {type: String, required: true},
  comment:{type: String, required: true},
  mail:{type: String, required: true},
}, {collection: "mail"});

const MailModel = mongoose.model("Mail", MailSchema);

module.exports = MailModel;