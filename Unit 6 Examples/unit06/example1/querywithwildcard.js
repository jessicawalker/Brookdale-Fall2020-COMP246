//This example queries the students collection in the comp246 database
//for all students whose name starts with Alice

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
  
  //the find method with a query object filters the results
  var query = { name:  /^Alice/ }; //this is a regular expression that means "starts with Alice"
  dbo.collection("students").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log( JSON.stringify(result, null, 4) );
    client.close();
  });

});
