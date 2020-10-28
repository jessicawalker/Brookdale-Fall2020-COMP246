/* 
Jessica Walker
Lab 8a: Knock, knock
Directions: Write a Node.js program that gets a random knock-knock joke and displays it. 
            Revised: Rewrite the Lab 8 solution using a Promise.
*/

const joke = require('knock-knock-jokes');
const fs = require('fs');

var outputString = "";

for (var i = 0; i < 3; i++) {
    outputString += joke() + "@\n";
}

fs.writeFile("knockknock.txt", outputString, function(err) {
    if (err) {
        console.error(err);
    }
});

fs.readFile("knockknock.txt", "utf8", checkReadResults);

/*
function checkReadResults(err, inputString) {
    var inputArray = inputString.split("@");
    for (var i = 0; i < inputArray.length; i++) {
        console.log(inputArray[i] + "\n\n");
    }
}
*/

function checkReadResults(err, inputString) {
    if(err) {
         console.log(err);
    } else {
         displayJokes(inputString);
    }
}

function displayJokes(inputString) {
    var inputArray = inputString.split("@");


    for(var i=0; i<inputArray.length; i++) {
         console.log(inputArray[i] + "\n\n");
    }
}