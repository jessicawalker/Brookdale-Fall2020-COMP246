const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({type: 'application/vnd/api+json'}));
//var router = require(__dirname + '/router');
//app.use(__dirname, router);

var dirName = process.cwd() + '/client';
//app.use(express.static(dirName));

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/viewMovies', function(req, res) {

    fs.readFile(__dirname + '/files/data.json', (err, data) => {
        if (err) {
            console.error(err);
        }

        var str = "<table id=\"tableData\">";
        var movie = JSON.parse("[" + data + "]");
        str += "<tr id=\"headerRow\">\n";
        str += "\t<th>Rank on IMDb</th>\n";
        str += "\t<th>Movie Title</th>\n";
        str += "\t<th>Year Released</th>\n";
        str += "\t<th>Director</th>\n";
        str += "\t<th>IMDb Rating</th>\n";
        str += "\t<th>Number of Users</th>\n";
        str += "</tr>\n";
    
        for (var m in movie) {
            str += "<tr id=\"item" + movie[m].rank + "\">\n";
            str += "\t<td class=\"rank\">" + movie[m].rank + "</td>\n";
            str += "\t<td class=\"title\">" + movie[m].title + "</td>\n";
            str += "\t<td class=\"year\">" + movie[m].year + "</td>\n";
            str += "\t<td class=\"director\">" + movie[m].director + "</td>\n";
            str += "\t<td class=\"rating\">" + movie[m].rating + "</td>\n";
            str += "\t<td class=\"users\">" + movie[m].users + "</td>\n";
            str += "</tr>\n";
        }

        str += "</table>\n\n";
        str += "<p><a href=\"/addMovies\">Add Movies</a></p>";
        res.status(200).send(str);
    });
});

app.get('/addMovies', function(req, res) {
    res.status(200).sendFile(dirName + '/addMovies.html');
});

app.use(express.json());
app.post('/addMovie', function(req, res){

    var data = ", \n{";
    data += "\n\t\"rank\":" + req.body.rank;
    data += ",\n\t\"title\":\"" + req.body.title + "\"";
    data += ",\n\t\"year\":" + req.body.year;
    data += ",\n\t\"director\":\"" + req.body.director + "\"";
    data += ",\n\t\"rating\":" + req.body.rating;
    data += ",\n\t\"users\":" + req.body.users;
    data += "\n}";
    fs.appendFile(__dirname + '/files/data.json', data, (err) => { 
        if (err) 
          console.log(err); 
        else { 
          console.log("File written successfully\n");
        }
    });
    res.status(200).send("Thank you for adding a new movie to the list!");

});

app.listen(5000);

console.log('Server is running...');