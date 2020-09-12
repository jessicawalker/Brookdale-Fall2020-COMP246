//This example finds some fields in all the data occurrences 
//in our students collection in the comp246 database

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
  
  //the find() method with parameters, returns some fields of all the occurrences in the collection
  //0 means don't include the field in the results
  //1 means DO include the field in the results
  //Note: you cannot specify both 0s and 1s, except for the _id field
  dbo.collection("students").find({}, { projection: { _id: 0, name: 1, age: 1 } }).toArray(function(err, result) {
    if (!err && result && result[0]) {
      console.log( JSON.stringify(result, null, 4) );
      console.log(result[0].name + " , " + result[0].age);
    }
    client.close();
  });

});
