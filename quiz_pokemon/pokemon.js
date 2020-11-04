/* 
Jessica Walker
Quiz 3: Pokemon
Directions: Write a Node.js program that outputs all Pokemon that have the Fire type abilities.
*/

const pokemon = require('pokemon-picker');

console.log("Fire+ Type Pokemon\n------------------");

var fireTypes = pokemon.byType("Fire");

for (var f in fireTypes) {
    console.log(fireTypes[f].name  + " is of these types: " + fireTypes[f].types  + ".");
}