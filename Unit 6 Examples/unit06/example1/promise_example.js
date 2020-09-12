//global vars
var MongoClient = require('mongodb').MongoClient;
var gclient = null;
var gdbo = null;
var gdb = "comp246";
var gcollection = "students";
var uri = "mongodb://localhost:27017/" + gdb;

//functions that return promises
function createdb(uri) {
  return new Promise(function(resolve, reject) {
    
    MongoClient.connect(uri, {useNewUrlParser: true}, function(err, client) {
      if (err) reject(err);
      gclient = client;        //set the global client
      gdbo = gclient.db(gdb);  //set the global dbo object
      resolve('Database created!');
    });

  });  
}

function createcollection() {
  return new Promise(function(resolve, reject) {

    gdbo.createCollection(gcollection, function(err, res) {
      if (err) reject(err);
      resolve('Collection created!');
    });

  });  
}

function insertone() {
  return new Promise(function(resolve, reject) {

    var mystudentdata = { name: "Alice Jones", course: "COMP-246", age: 24 };
    gdbo.collection(gcollection).insertOne(mystudentdata, function(err, res) {
      if (err) reject(err);
      resolve('inserted one record');
    });

  });  
}

function findall() {
  return new Promise(function(resolve, reject) {

    gdbo.collection(gcollection).find({}).toArray(function(err, res) {
      if (err) reject(err);
      resolve( 'findall:\n' + JSON.stringify(res, null, 4) );
    });

  });  
}

function closedb() {
  return new Promise(function(resolve, reject) {

    gclient.close();
    resolve('database closed');

  });  
}

//now chain and call the promises
var promise = createdb(uri); //first job

promise

.then(function(data) {
  console.log(data);
  return createcollection();
})

.then(function(data) {
    console.log(data);
    return insertone();
})

.then(function(data) {
    console.log(data);
    return findall();
})

.then(function(data) {
    console.log(data);
    return closedb();
})

.then(function(data) {
  console.log(data);
  return; //done
})

.catch((error) => {
  console.error(error);
  closedb();
});

