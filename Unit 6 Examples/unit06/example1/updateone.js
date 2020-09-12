//This example queries the students collection in the comp246 database
//for the student with name Alice Jones, and changes her age to 25

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
  
  var query = { name: "Alice Jones" };
  var newvalues = { $set: {age: 25 } }; //update the age
  dbo.collection("students").updateOne(query, newvalues, function(err, res) {  //call updateOne()
    if (err) throw err;
    console.log( JSON.stringify(res, null, 4) );
    client.close();
  });
  
  //now run a query to verify that all Alice Jones age has been updated: node findeone.js

});
