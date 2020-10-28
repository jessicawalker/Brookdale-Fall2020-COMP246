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
var myPromise = new Promise (function(resolve, reject) {
    fs.readFile("knockknock.txt", "utf8", function(resolve, reject) {
        if(err) {
            reject(err);
        } else {
            resolves(inputString);
        }
    }
}

myPromise                                           // execute first job
    .then(function(inputString) {                            // second job
        displayJokes(inputString);
    })

    .catch(function(error) {
        console.error(error);
    });

  


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