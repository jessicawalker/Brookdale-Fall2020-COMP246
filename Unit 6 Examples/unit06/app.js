var MongoClient = require('mongodb').MongoClient;

var dbname = "test";
var dburl = "mongodb://localhost:27017/" + dbname;

var uri = dburl;
MongoClient.connect(uri, function(err, client) {
   const collection = client.db(dbname).collection("devices");
   // perform actions on the collection object
   console.log(collection);
   client.close();
});
