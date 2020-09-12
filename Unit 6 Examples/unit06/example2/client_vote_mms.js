/*
* This program calls the vote POST request to make a vote.
* A POST request requires a body (data). This data is your
* vote.
* The return value is a JSON object.
*/

var http = require('http');

//request options
var options = {
  host: '127.0.0.1', //IP address of the server
  path: '/vote', //defined by the server
  port: '1234',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

//request data defined by the server
var my_vote = "m&ms"; 
var data = { "vote": my_vote };

//send the POST request
var req = http.request(options, readResponse);
req.write(JSON.stringify(data)); //data to post
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
