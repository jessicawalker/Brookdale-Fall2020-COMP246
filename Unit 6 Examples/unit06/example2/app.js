//some modules
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

//This example uses a Cloud instance of MongoDB
//TODO: update these variables with your own custom mLab info.
var dbname = "comp246";
var dbuser = "user1";
var dbpass = "password1";
var dbhost = "ds123456.mlab.com";
var dbport = 27017;

//create the db URL, WITH user and password included
//Here's an example: mongodb://user1:password1@ds123456.mlab.com:27017/comp246
var dburl = "mongodb://" + dbuser + ":" + dbpass + "@" + dbhost + ":" + dbport + "/" + dbname;
var app = express();
var port = 1234;

// start the server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({type: 'application/vnd/api+json'}));

var routes = require('./routes/routes.js')(app,MongoClient,dburl);
var httpServer = http.createServer(app);
httpServer.listen(port);
console.log('server running: http://localhost:%s/  (Ctrl+C to Quit)', port);
