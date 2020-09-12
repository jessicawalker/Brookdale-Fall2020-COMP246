//This deletes one record from the students collection based on a filter

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
  
  // Try to DELETE one students with the name "Alice Jones"
  var myquery = { name: 'Alice Jones' };
  dbo.collection("students").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("Tried to delete one 'Alice Jones' record");
    client.close();
  });

});
