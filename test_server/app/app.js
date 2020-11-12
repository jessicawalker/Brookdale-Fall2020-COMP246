const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname + "/../client")));

// Router listeners
app.get('/write-library', function(req, res) {
    res.status(200).sendFile(path.join(__dirname + '/../client/write-library.html'));
});

app.get('/browse-library', function(req, res) {
    res.status(200).sendFile(path.join(__dirname + '/../client/browse-library.html'));
});

// Service listeners
var outputFile = './files/library.txt';

app.post('/write-record', function(req, res) {
    var data = req.body.data; // brings in one json object

    if (fs.existsSync(outputFile)) {
        data = "," + data;
    };

    fs.appendFile(outputFile, data, function(err) {
        if (err) {
            res.send(err);
        } else {
            res.send("SUCCESS");
        }
    })
});

app.get('/read-records', function(req, res) {
    fs.readFile(outputFile, "utf8", function(err, data) {
        if (err) {
            res.send(err);
        } else {
            data = "[" + data + "]";
            res.send(data);
        }
    });
});

app.listen(4500);

console.log('Server is running...');