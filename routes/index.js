var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var userModel = require("../models/userModel.js");
var url = "mongodb://admin:asd123456@ds153198.mlab.com:53198/bikelab";
//var url = process.env.MONGOLAB_URI;
const AccessoryModel = require('../models/AccessoryModel');

/* Mongoose Setup */
//Set up default mongoose connection
mongoose.connect(url);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));


/* GET accesories from db */
router.get("/dataAccessories", function (req, res, next) {
    AccessoryModel.find().then(function (doc) {
        console.log(doc);
        res.send(doc);
    })
});
/* POST accesory to db */
router.post("/addAccessory", function (req, res, next) {
    let item = {
        name: req.body.name
    };
    let data = new AccessoryModel(item);
    data.save();
});
/* UPDATE accesory in db */
router.post("/addAccessory", function (req, res, next) {
    var item = {
        name: req.body.name
    };
    let id = req.body.id;
    AccessoryModel.findIndex(id, function (err, doc) {
        if (err) {
            console.log("Error finding by id");
        }
        doc.name = req.body.name;
        doc.save();
    });
    var data = new Accessory(item);
    data.save();
});

router.get("/images/*", (req, res) => {
    res.send("me amo");
})

router.post("/loginUser", (req,res) => {
   var myData = new userModel(req.body);
   myData.save()
       .then(item => {
           console.log("Saved in db");
       })
       .then(err=>{
           console.log(err);
           res.status(400).send("Unable to post db");
       });
});
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/frontend/build/index.html'));
});


module.exports = router;
