/*
This example shows the proper way to work with asynchronous calls in Node.js (Promises version)
*/
var fs = require('fs');

//create a file that we'll use for input
fs.writeFileSync("letters.txt", 'aBcDefgHiJKlmNoPqrsTUvWxYZ');

//this Promise reads the file and returns its length
var myPromise = new Promise(function(resolve, reject) {
  fs.readFile('letters.txt', "utf8", function(err, data) {
    if (err) {
      reject(err);
    }
    else {
      resolve(data.length); //instead of returning, pass the answer to the callback function
    }
  });  
});

//call the Promise
 myPromise.then(function(result) {
    console.log(result); //success
  }, function(err) {
    console.log(err);
});








