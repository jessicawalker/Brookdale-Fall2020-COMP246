
//What's the output?

setTimeout( function() { console.log('inside function1'); } , 10);
console.log('after call 1');
setTimeout( function() { console.log('inside function2'); } , 10);
console.log('after call 2');
setTimeout( function() { console.log('inside function3'); } , 10);
console.log('after call 3');
setTimeout( function() { console.log('inside function4'); } , 10);
console.log('after call 4');