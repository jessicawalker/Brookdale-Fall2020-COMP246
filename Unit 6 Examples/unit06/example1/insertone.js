//This example INSERTS data into our students collection in the comp246 database

//create a client to access MongoDB
var MongoClient = require('mongodb').MongoClient;

//uri for your local MongoDB (e.g., on the Brookdale computers)
//you can provide your own cloud URL here if you have one
var uri = "mongodb://localhost:27017/comp246";

console.log("Connecting to URL: " + uri + " ...");

//use the client to connect to our MongoDB server
//the useNewUrlParser option is needed to avoid some warnings
MongoClient.connect(uri, {useNewUrlParser: true}, function(err, client) {
  if (err) throw err;

  //get a database object for our comp246 MongoDB database
  var dbo = client.db("comp246");
  
  //create data to insert
  var mystudentdata = { name: "Alice Jones", course: "COMP-246", age: 24 };
  
  //insert into our students collection
  dbo.collection("students").insertOne(mystudentdata, function(err, res) {
    if (err) throw err;
    console.log("inserted student data!");
    client.close();
  });

});
