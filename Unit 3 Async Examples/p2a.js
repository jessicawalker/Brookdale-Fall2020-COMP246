var fs = require('fs');

/*
1. Delete file1.txt.
2. Create a file.
3. Read its contents.
4. Create an upper case version of the contents.
5. Write the new content.
6. Read the file again.
*/

//This doesn't work as expected. Why?

fname = 'file1.txt';

//delete file
fs.unlink(fname, function(err) {
  if(err) {
    console.error(err);
  }
});

//create file
fs.writeFile(fname, 'abcdefghijklmnopqrstuvwxyz', function(err) {
  if(err) {
    console.error(err);
    return;
  }
  //write success
});

//read file
var contents = '';
fs.readFile(fname, "utf8", function(err,data) {
  if(err) {
    console.error(err);
    return;
  }
  //read success
  contents = data;
});

//make contents upper case
contents = contents.toUpperCase();

//create file
fs.writeFile(fname, contents, function(err) {
  if(err) {
    console.error(err);
    return;
  }
  //write success
});

//read file
fs.readFile(fname, "utf8", function(err,data) {
  if(err) {
    console.error(err);
    return;
  }
  //read success
  console.log('final read: ' + data);
});