/* 
Jessica Walker
Lab 8a: Knock, knock
Directions: Write a Node.js program that gets a random knock-knock joke and displays it. 
            Revised: Rewrite the Lab 8 solution using a Promise.
*/

// bring in the needed modules
const joke = require('knock-knock-jokes');
const fs = require('fs');

// string to save the joke output
var outputString = "";

// write to outputString the aforementioned jokes
for (var i = 0; i < 3; i++) {
    outputString += joke() + "@\n";
}

// write the jokes from the outputString to a file
fs.writeFile("knockknock.txt", outputString, function(err) {
    if (err) {
        console.error(err);
    }
});

// start using promises here
var promise = checkReadResults(err, inputString); // first job
promise                                           // execute first job

.then(function(data) {                            // second job
    //console.log(data);
    //return job1("aBcDeFgHiJkLmNoPqRsTuVwXyZ","file1.txt");
  })

  

fs.readFile("knockknock.txt", "utf8", checkReadResults);

function checkReadResults(err, inputString) {   // first job
    return new Promise(function(resolve, reject) {
        if(err) {
            console.log(err);
        } else {
            displayJokes(inputString);
        }
    }
}

function displayJokes(inputString) {            // second job
    var inputArray = inputString.split("@");


    for(var i=0; i<inputArray.length; i++) {
         console.log(inputArray[i] + "\n\n");
    }
}