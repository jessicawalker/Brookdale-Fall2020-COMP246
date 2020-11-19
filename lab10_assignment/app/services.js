const fs = require("fs");
const path = require("path");
var outputFile = path.join(__dirname + "/files/movies.txt");

// Service listeners
var services = function(app) {
    // takes in data from activateSubmitButton() in movies.js
    app.post("/write-record", function(req, res) {

        // generates unique ID number
        var d = new Date();
        var ID = "mov" + d.getTime();

        // creates JSON object for movie entry 
        var data = {
            ID: ID,
            rank: req.body.rank,
            movieTitle: req.body.movieTitle,
            year: req.body.year,
            director: req.body.director,
            rating: req.body.rating,
            users: req.body.users
        };

        data = JSON.stringify(data);

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

    // remove a record
    app.delete("/delete-record"),
        function(req, res) {};
};

module.exports = services;