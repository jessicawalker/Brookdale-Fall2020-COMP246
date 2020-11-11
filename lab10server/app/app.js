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
        var movie = JSON.parse(data);
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

// for POST, with writeFile, can I take out the last line (the ] to end the object),
// and then append at the end the new data, plus a new ] to end the object?

app.use(express.json());

app.post('/addMovie', function(req, res){

    var data = "{";
    data += "\"rank\":" + req.body.rank;
    data += ", \"title\":\"" + req.body.title + "\"";
    data += ", \"year\":" + req.body.year;
    data += ", \"director\":\"" + req.body.director + "\"";
    data += ", \"rating\":" + req.body.rating;
    data += ", \"users\":" + req.body.users;
    data += "}";
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

/*
Has the following folder structure:
  root directory - contains package.json
  src - contains app.js,  and router.js
  src/files - contains data files
  Client - where web pages (html files) are placed
The server should be able to receive user entered data from the web page
The server will add the new data to the data file (remember append) on in the src/files directory when a POST is made
-The server will send the data back to the web page when a GET call is made
-Two html files will be created.  One for entering the data into the "database", the second for retrieving and showing the data
-Each page will have a hyperlink to the other page.

----------

Some thoughts on building our web servers:

Our toolbox has all we need to manage our database file.  Yesterday, we saw how to install 
express and how the GET listener (method) works, the POST listener is similar.  So, once we 
get them in place, we just need to:

 Add code to the POST listener to write our data to the file.  If you recall, we did 
 this (knock-knock).  The new thing is that we want to append our data to the file.  
 Do some research on how you can use writeFile() to append a file.

Add code to the GET listener to retrieve the data from our file and return it to the client.  
We've done this as well (again, knock-knock).  This time, however, we are not writing to the 
terminal but sending to the client (similar to our hello world example).

Note that the votes example you are reviewing uses another external package called body-parser.  
This enables our server to break down the JSON text we receive from the client.  We will look 
at this approach, but since we can store our data to our files as JSON formatted text, we don't 
really need this (yet!) to get our two (read and write) database functions up and running.
*/