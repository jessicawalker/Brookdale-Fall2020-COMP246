/* 
Jessica Walker
Lab 7: Random Square
Directions: Write a Node.js program that outputs a random square to the console. 
*/

var random = Math.ceil(Math.random() * 10);
var square = "";

for (var i = 0; i < random; i++) {
    for (var j = 0; j < random; j++) {
        square += "*";
    }
    square += "\n";
}

//console.log(square);
process.stdout.write(square);