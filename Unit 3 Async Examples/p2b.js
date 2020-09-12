var fs = require('fs');

/*
1. Delete file1.txt.
2. Create a file.
3. Read its contents.
4. Create an upper case version of the contents.
5. Write the new content.
6. Read the file again.
*/
fname = 'file1.txt';

//One way to do this is by nesting the asynchronous calls, so they get called at the correct times.
//However, this is a little messy to work with and look at. This is known as "callback hell".

//delete file
fs.unlink(fname, function(err) {
  if(err) {
    console.error(err);
  }

  //create file
  fs.writeFile(fname, 'abcdefghijklmnopqrstuvwxyz', function(err) {
    if(err) {
      console.error(err);
      return;
    }
    //write success

    //read file
    var contents = '';
    fs.readFile(fname, "utf8", function(err,data) {
      if(err) {
        console.error(err);
        return;
      }
      //read success
      contents = data;
      //make contents upper case
      contents = contents.toUpperCase();

      //create file
      fs.writeFile(fname, contents, function(err) {
        if(err) {
          console.error(err);
          return;
        }
        //write success

        //read file
        fs.readFile(fname, "utf8", function(err,data) {
          if(err) {
            console.error(err);
            return;
          }
          //read success
          console.log('final read: ' + data);
        });

      });

    });

  });

});
