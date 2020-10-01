//this is appendfile.js

//include modules
var fs = require('fs');

var str = "The quick brown\n";
str += "fox jumped over\n";
str += "the lazy dog.\n";

//append to an existing file (don't overwrite its contents)
fs.appendFile("file1.txt", str , imDone); 

function imDone(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("File created successfully!");
  }
}

/*
Notes:
This is like the previous example, but we APPEND to the file (not replace).
Run this program multiple times, then view the output file.
*/
