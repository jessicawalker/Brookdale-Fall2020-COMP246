/*
* This program calls the deleteAll DELETE request to delete all votes.
* The return value is a JSON object.
*/

var http = require('http');

//request options
var options = {
  host: '127.0.0.1', //IP address of the server
  path: '/deleteAll', //defined by the server
  port: '1234',
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
};


//send the POST request
var req = http.request(options, readResponse);
req.end();

function readResponse(response) {
  var responseData = '';
  response.on('data', function (chunk) {
    responseData += chunk;
  });
  response.on('end', function() {
    var dataObj = JSON.parse(responseData);
    console.log("Message: " + dataObj.msg);
  });
}
