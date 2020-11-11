const express = require('express');
const app = express();
const fs = require('fs');

var dirName = process.cwd() + '/client';
//app.use(express.static(dirName));

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/viewMovies', function(req, res) {
    res.status(200).sendFile(dirName + '/viewMovies.html');
});

app.get('/addMovies', function(req, res) {
    res.status(200).sendFile(dirName + '/addMovies.html');
});

app.listen(5000);

console.log('Server is running...');
console.log(dirName);

/*
Has the following folder structure:
  root directory - contains package.json
  src - contains app.js,  and router.js
  src/files - contains data files
  Client - where web pages (html files) are placed
The server should be able to receive user entered data from the web page
The server will add the new data to the data file (remember append) on in the src/files directory when a POST is made
The server will send the data back to the web page when a GET call is made
Two html files will be created.  One for entering the data into the "database", the second for retrieving and showing the data
Each page will have a hyperlink to the other page.
*/