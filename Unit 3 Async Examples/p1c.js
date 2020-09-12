var fs = require('fs');

var promise = job0('inside function1'); //first job

promise

.then(function(data) {
  console.log('after function1');
  return job0('inside function2');
})

.then(function(data) {
  console.log('after function2');
  return job0('inside function3');
})

.then(function(data) {
  console.log('after function3');
  return job0('inside function4');
})

.then(function(data) {
  console.log('after function4');
  return; //done
})

.catch((error) => {
  console.error(error);
});

//create a function that returns a Promise
function job0(s) {
  return new Promise(function(resolve, reject) {
    setTimeout( function() { 
      console.log(s); 
      resolve(''); //on success, return this data
      //reject(err); //on error, return this err
    } , 10);
  });
}
