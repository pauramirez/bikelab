var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var url = "mongodb://admin:asd123456@ds153198.mlab.com:53198/bikelab";
//var url = process.env.MONGOLAB_URI;

/* Mongoose Setup */
//Set up default mongoose connection
mongoose.connect(url);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
var Schema = mongoose.Schema;


var AccesorySchema = new Schema({
    name: {type: String, required: true}/*,
    category:{type: String, required: true},
    brand:{type: String, required: true},
    price:{type: Number, required: true},
    description:{type:String, required:true},
    image:{type:String, required:true},
    provider:{type:String, required:true}*/
}, {collection: "accessories"});

var Accessory = mongoose.model("Accessory", AccesorySchema);


/* GET accesories from db */
router.get("/dataAccessories", function (req, res, next) {
    Accessory.find().then(function (doc) {
        console.log(doc);
        return doc;
    })
});
/* POST accesory to db */
router.post("/addAccessory", function (req, res, next) {
    let item = {
        name: req.body.name
    };
    let data = new Accessory(item);
    data.save();
});
/* UPDATE accesory in db */
router.post("/addAccessory", function (req, res, next) {
    var item = {
        name: req.body.name
    };
    let id = req.body.id;
    Accessory.findIndex(id, function (err, doc) {
        if (err) {
            console.log("Error finding by id");
        }
        doc.name = req.body.name;
        doc.save();
    });
    var data = new Accessory(item);
    data.save();
});

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index");
});
/* GET home page. */
router.get("/accessories", function (req, res, next) {
    res.render("search");
});
/* GET home page. */
router.get("/contact", function (req, res, next) {
    res.render("contact");
});

module.exports = router;
