const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
//const router = require('./router.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname + "/../client")));
//router(app);

// Router listeners
app.get('/write-movies', function(req, res) {
    res.status(200).sendFile(path.join(__dirname + '/../client/write-movies.html'));
});

app.get('/browse-movies', function(req, res) {
    res.status(200).sendFile(path.join(__dirname + '/../client/browse-movies.html'));
});

// Service listeners
var outputFile = './files/movies.txt';

app.post('/write-record', function(req, res) {
    var data = req.body.data;

    if (fs.existsSync(outputFile)) {
        data = ",\n" + data;
    }

    fs.appendFile(outputFile, data, function(err) {
        if (err) {
            res.send(err);
        } else {
            res.send("SUCCESS");
        }
    });
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

app.listen(5500);

console.log('Server is running...');