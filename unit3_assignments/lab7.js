/* 
Jessica Walker
Lab 7: Random Square
Directions: Write a Node.js program that outputs a random square to the console. 
*/

var square = "";    // string to hold square output

// create input
const readline = require("readline");
const rlintf = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rlintf.question("Enter a whole number to create a square of that size: ", function(number) {

    if (!isNaN(number) && number != "") {

        for (var i = 0; i < number; i++) {
            square += "\n";     // starts off adding space at the top so isn't up against prompt
            for (var j = 0; j < number; j++) {
                square += "*";
            }
        }

        console.log(square);
    }

    else {
        console.error("You did not enter a whole number. Exiting now.");
    }

    rlintf.close();
});

rlintf.on("close", function() {
    process.exit(0);
});

// ==== random number generated version ====
/*

var random = Math.ceil(Math.random() * 10);
for (var i = 0; i < random; i++) {
    for (var j = 0; j < random; j++) {
        square += "*";
    }
    square += "\n";
}
process.stdout.write(square);

*/