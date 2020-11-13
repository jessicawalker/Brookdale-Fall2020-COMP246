const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.resolve(__dirname + "/../client")));

// Router listeners
app.get("/write-movies", function(req, res) {
    res.status(200).sendFile(path.join(__dirname + "/../client/write-movies.html"));
});

app.get("/browse-movies", function(req, res) {
    res.status(200).sendFile(path.join(__dirname + "/../client/browse-movies.html"));
});

// Service listeners
var outputFile = path.join(__dirname + "/files/movies.txt");

// takes in data put together as JSON object from activateSubmitButton() in movies.js
app.post("/write-record", function(req, res) {
    var data = req.body.data;

    // makes sure each movie entry/JSON object is delineated from each other
    if (fs.existsSync(outputFile)) {
        data = ",\n" + data;
    }

    // outputFile gets new movie entry/JSON object, to be used by app.get("/read-records")
    fs.appendFile(outputFile, data, function(err) {
        if (err) {
            res.send(err);
        } else {
            res.send("SUCCESS");
        }
    });
});

// reads JSON objects from outputFile, to be used by getMovieData() in movies.js
app.get("/read-records", function(req, res) {
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

console.log("Server is running...");