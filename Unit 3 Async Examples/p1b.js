
//One way to do this is by nesting the asynchronous calls, so they get called at the correct times.
//However, this is a little messy to work with and look at. This is known as "callback hell".

setTimeout( function() { console.log('inside function1'); 
  console.log('after call 1');
  setTimeout( function() { console.log('inside function2'); 
    console.log('after call 2');
    setTimeout( function() { console.log('inside function3'); 
      console.log('after call 3');
      setTimeout( function() { console.log('inside function4'); 
        console.log('after call 4');
      } , 10);
    } , 10);
  } , 10);
} , 10);