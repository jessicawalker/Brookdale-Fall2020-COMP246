const express = require("express");
const app = express();
const path = require("path");
const clientPath = path.resolve(__dirname + "/../client");
const bodyParser = require("body-parser");


// new mongo stuff
const MongoClient = require("mongodb").MongoClient;
var dbURL = mongodb:\/\/localhost;    ///typically on port 27017

MongoClient.connect(dbURL, {useUnifiedTopology: true }, function(err, client) {
    if (err) {
        // can't connect
    }
    else {
        //can connect
        var dbo = client.db("databaseName");

        // don't need to necessarily make new db, not like SQL where it needs the db set up
        dbo.createCollection("collectionName", function(err, res) {
            if (err) {
                // what to do if error
            }
            else {
                // do stuff
                client.close();
            }
        });
        // end the not-necessary creation


        // add new record
        var myData = {data1: "somedata", data2: 5, data3: "moredata"}; //create JSON
        dbo.collection("collectionName").insertOne(myData, function(err,res) {
            if (err) {
                // what to do if error
            }
            else {
                // do stuff if necessary
                client.close();
            }
        });
        // end add

        // find
        dbo.collection("collectionName").find().toArray(function (err, data) {
            if (err) {
                // what to do if error
            }
            else {
                for (var i = 0; i < data.length; i++) {
                    console.log(data[i]);   // or data[i].property
                }
                client.close();
            }
        });

        // find some docs
        var search = {name: "Fred"};
        dbo.collection("collectionName").find()

        // sort
        var sortBy = {name: 1};
        dbo.collection("collectionName").find().sort(sortBy).toArray(function (err, data) {
            for (var i = 0; i < data.length; i++) {
                console.log(data[i]);   // or data[i].property
            }
            client.close();
        });

        // update
        var searchID = {id: recordID};
        var newVals = {$set: {name: "Joe", age: 20} };
        dbo.collection("collectionName").updateOne(searchID, newVals, function (err, res) {
            if (err) {
                // what to do if error
            }
            else {
                // do stuff if necessary for successful
                client.close();
            }
        });

        // delete
        var searchIDagain = {id: recordID};
        dbo.collection("collectionName").deleteOne(searchIDagain, function (err, res) {
            if (err) {
                // what to do if error
            }
            else {
                // do stuff if necessary for successful
                client.close();
            }
        });
    }
});





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use("/client", express.static(clientPath));

// Make the server
var server;
var port = process.env.PORT || process.env.NODE_PORT || 5500;

// Router listeners
var router = require("./router.js");
router(app);

// Service listeners
var services = require("./services.js");
services(app);

// App listener
server = app.listen(port, function(err) {
    if (err) {
        throw err;
    }
    console.log("Listening on port " + port);
});