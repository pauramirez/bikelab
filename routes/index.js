var express = require("express");
var router = express.Router();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = "mongodb://admin:asd123456@ds153198.mlab.com:53198/bikelab";



// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        console.log('Connection established to', url);

        // do some work here with the database.

        //Close connection
        db.close();
    }
});

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render('index');
});

module.exports = router;
