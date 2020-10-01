//this is writefile.js

//include modules
var fs = require('fs');

output_str = "Fool me once\nshame on you\nfool me twice\nshame on me";

//create a file (overwrite if it exists) in the current folder
//imDone is a callback function which notes success or failure
fs.writeFile("file1.txt", output_str, imDone);

function imDone(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("File created successfully!");
  }
}

/*
Notes:
- 'fs' is a built-in Node.js library that lets you process files.
- The require statement tells Node.js which modules to include.
- This example writes a file in the current folder. You can specify a path. Note that JavaScript in the browser does NOT let you write files to the file system.
- console.log is a way to display a message to the console (standard output). Note that console.log in the browser outputs to the browser console.
- The writeFile statement accepts a filename, an output string, and a callback function as parameters.
- In this case, imDone is the name of the callback function
- The imDone function is defined in this file
- This function accepts an err parameter (in case there's an error writing the file).
- If there's an error, the callback function prints it.
- Otherwise, the function prints a success message.
- View the output file file1.txt in a text editor.
- Question: What are some reasons why the writeFile statement might fail?
*/
