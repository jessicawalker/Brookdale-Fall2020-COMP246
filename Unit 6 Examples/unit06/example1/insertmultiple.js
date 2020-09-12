//This example INSERTS multiple data records into our students collection in the comp246 database

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
  
  //create multiple records to insert
  var mystudentdata = [
    { name: "Alice Jones", course: "COMP-246", age: 24 },
    { name: "Alice Jones", course: "COMP-246", age: 23 },
    { name: "Alice Jackson", course: "COMP-171", age: 21 },
    { name: "Alice Sanchez", course: "COMP-126", age: 25 },
    { name: "Bob Smith", course: "COMP-171", age: 21 },
    { name: "Marcus Jones", course: "COMP-171", age: 20 },
    { name: "Stephen Jones", course: "COMP-126", age: 22 },
    { name: "Colin Knight", course: "COMP-271", age: 23 }
  ];

  //insert multiple records into our students collection
  dbo.collection("students").insertMany(mystudentdata, function(err, res) {
    if (err) throw err;
    console.log("Number of students inserted: " + res.insertedCount + " !");
    
    //the res (Result) object contains the result of the insert
    //JSON.stringify will convert the res object to a nicely formatted JSON string for printing
    console.log("Result object: " + JSON.stringify(res, null, 4));
    client.close();
  });
  
});
