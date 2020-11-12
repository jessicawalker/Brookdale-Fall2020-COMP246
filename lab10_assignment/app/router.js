const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname + "/../client")));

// Router listeners
module.exports = function(app) {
    app.get('/write-movies', function(req, res) {
        res.status(200).sendFile(path.join(__dirname + '/../client/write-movies.html'));
    });

    app.get('/browse-movies', function(req, res) {
        res.status(200).sendFile(path.join(__dirname + '/../client/browse-movies.html'));
});};