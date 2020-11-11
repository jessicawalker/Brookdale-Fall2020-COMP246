const express = require('express');
const app = express();
var router = express.Router();

var dirName = process.cwd() + '/client';
//app.use(express.static(dirName));

router.get('/', function(req, res) {
    res.send('Hello World');
});

router.get('/viewMovies', function(req, res) {
    res.status(200).sendFile(dirName + '/viewMovies.html');
});

router.get('/addMovies', function(req, res) {
    res.status(200).sendFile(dirName + '/addMovies.html');
});