/* 
Jessica Walker
Lab 9: Fortune Teller
Directions: Write a Node.js program that displays 10 random fortunes using the nostra npm module

Packages used:
    nostra -- https://www.npmjs.com/package/nostra/v/0.0.6
*/

const nostra = require('nostra');

for (var i = 0; i < 10; i++) {
    var fortune = nostra.generate();
    console.log("\n" + fortune);
}