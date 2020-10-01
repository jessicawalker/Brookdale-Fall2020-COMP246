//include modules
var fs = require('fs');

// read a file
fs.readFile('file1.txt', "utf8", imDone); //UTF-8 is the character encoding we are used to. without this param, a raw buffer is returned

function imDone(err, data) {
  if (err) {
    console.error("ERROR: " + err);
  } else {
    console.log("The file contains: " +  data );
  }
}


/*
This example reads a text file from the computer and outputs the contents.
It uses the readFile function.
readFile only expects two parameters.
*/
