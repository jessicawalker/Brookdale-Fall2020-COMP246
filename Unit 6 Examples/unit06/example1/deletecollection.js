//This example connects to the MongoDB server and
//DELETES the entire students collection from MongoDB

//create a client to access MongoDB
var MongoClient = require('mongodb').MongoClient;

//you can provide your own cloud URL here if you have one
var uri = "mongodb://localhost:27017/comp246";

console.log("Connecting to URL: " + uri + " ...");

//use the client to connect to our MongoDB server
//the useNewUrlParser option is needed to avoid some warnings
MongoClient.connect(uri, {useNewUrlParser: true}, function(err, client) {
  if (err) throw err;

  //get a database object for our comp246 MongoDB database
  var dbo = client.db("comp246");
  
  dbo.collection("students").drop(function(err, result) {
    if (err) throw err;
    if (result) console.log("students collection deleted");
    client.close();
  });

});
