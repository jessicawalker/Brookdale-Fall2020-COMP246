/*
* This program calls the getVotes GET request to get the current vote count.
* The return value is a JSON object.
*/

var http = require('http');

//request options
var options = {
  host: '127.0.0.1', //IP address of the server
  path: '/getVotes', //defined by the server
  port: '1234',
  method: 'GET'
};

//send the GET request to get the vote count
var req = http.request(options, readResponse);
req.end();

function readResponse(response) {
  var responseData = '';
  response.on('data', function (chunk) {
    responseData += chunk;
  });
  response.on('end', function() {
    console.log(responseData);
  });
}