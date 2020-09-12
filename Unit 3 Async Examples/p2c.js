var fs = require('fs');

var promise = job0("file1.txt"); //first job

promise

.then(function(data) {
  console.log(data);
  return job1("aBcDeFgHiJkLmNoPqRsTuVwXyZ","file1.txt");
})

.then(function(data) {
    console.log(data);
    return job2("file1.txt");
})

.then(function(data) {
    console.log('File read successfully: ' + data);
    data = data.toUpperCase();
    return job1(data,"file1.txt");
})

.then(function(data) {
    console.log(data);
    return job2("file1.txt");
})

.then(function(data) {
  console.log(data);
  return; //done
})

.catch((error) => {
  console.error(error);
});



function job0(fname) {
  return new Promise(function(resolve, reject) {
    fs.unlink(fname, function(err) {
      if(err) {
        reject(err);
      }
      resolve('file deleted successfully');
    });
  });
}

function job1(s,fname) {
  return new Promise(function(resolve, reject) {
    fs.writeFile(fname, s, function(err) {
      if(err) {
        reject(err);
      }
      resolve('file written successfully');
    });
  });
}

function job2(fname) {
  return new Promise(function(resolve, reject) {
    fs.readFile(fname, "utf8", function(err,data) {
      if(err) {
        reject(err);
      }
      resolve(data);
    });
  });
}
