/*
This example shows the proper way to work with asynchronous calls in Node.js
*/
var fs = require('fs');

//create a file that we'll use for input
fs.writeFileSync("letters.txt", 'aBcDefgHiJKlmNoPqrsTUvWxYZ');

//write a function that reads the file and returns the size of its contents; use a callback function as a parameter
function getLength(callback) {
  fs.readFile('letters.txt', "utf8", function(err, data) {
    if (err) {
      console.error("ERROR: " + err);
      return 0;
    }
    else {
      callback(data.length); //instead of returning, pass the answer to the callback function
    }
  });
}

//function call
getLength( function(s) {console.log(s);} ); //this works!






