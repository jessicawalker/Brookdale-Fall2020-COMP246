/*
This example shows a common pitfall with the asynchronous nature of Node.js
*/
var fs = require('fs');

//create a file that we'll use for input
//writeFileSync takes no callback. it will block on this line until done.
fs.writeFileSync("letters.txt", 'aBcDefgHiJKlmNoPqrsTUvWxYZ');

//write a function that reads the file and returns the size of its contents
function getLength() {
  fs.readFile('letters.txt', "utf8", function(err, data) {
    if (err) {
      console.error("ERROR: " + err);
      return 0;
    }
    else {
      return data.length;
    }
  });
}

var result = getLength();
console.log(result); //unfortunately, result is undefined, because this line executes before getLength() returns
