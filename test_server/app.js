const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/love', function(req, res) {
    res.status(200).sendFile(__dirname + '/love.html');
});

app.listen(4000);

console.log('Server is running...');