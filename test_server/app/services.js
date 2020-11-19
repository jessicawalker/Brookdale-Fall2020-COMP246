const fs = require('fs');
const path = require("path");
var outputFile = path.join(__dirname + "/files/library.txt");

// Service listeners
var services = function(app) {
    app.post('/write-record', function(req, res) {
        var data = req.body.data; // brings in one json object

        if (fs.existsSync(outputFile)) {
            data = "," + data;
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

                var parsedData = JSON.parse(data);
                for (var i = 0; i < parsedData.length; i++) {

                }
            }
        });
    });
    /*
            app.delete("/delete-record"),
                function(req, res) {
                    var data = req.body.data;
                    fs.readFile(outputFile, "utf8", function(err, data) {
                                if (err) {
                                    res.send(err);
                                } else {
                                    data = "[" + data + "]";
                                    res.send(data);

                                    var parsedData = JSON.parse(data);
                                    for (var i = 0; i < parsedData.length; i++) {
                                        if (id == parsedData[i].ID) {
                                            // remove item from array
                                            // break
                                        }
                                    }
                                    var dataString = JSON.stringify(parsedData)
                                    remove "[" + "]" (using substring) (to go back into string format)
                                    fs.writeFile() 
                                };
                            };*/
    // on html:
    // add a delete button next to each record
};

module.exports = services;