//This example connects to the MongoDB server and
//CREATES a new collection in our comp246 database called students
//"collection" is MongoDB terminology for table

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
  
  //Create a collection name "students":
  dbo.createCollection("students", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    client.close();  //must be here, or else you could close it before this function completes
  });

});
