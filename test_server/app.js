const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello World');
});

// did something wrong here, rewatch lecture about 7:40pm (~1.5 hours in) to see what I did wrong
app.get('/love', function(req, res) {
    res.status(200).sendFile(__dirname + '/love.html');
})

app.listen(4000);

console.log('Server is running...');