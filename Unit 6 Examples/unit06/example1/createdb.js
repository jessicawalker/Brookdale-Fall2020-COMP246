//This example connects to the MongoDB server and
//CREATES a new database named comp246

//create a client to access MongoDB
var MongoClient = require('mongodb').MongoClient;

//uri for your local MongoDB (e.g., on the Brookdale computers)
//you can provide your own cloud URL here if you have one
//if using mlab, create the database from the browser, as well as a user/password, first
var uri = "mongodb://localhost:27017/comp246";

console.log("Connecting to URL: " + uri + " ...");

//use the client to connect to our MongoDB server
//the useNewUrlParser option is needed to avoid some warnings
MongoClient.connect(uri, {useNewUrlParser: true}, function(err, client) {
  if (err) throw err;
  console.log("Database created!");
  client.close();
});
