/* Write a Node.js program that uses the quadratic formula -- 
        ax^2 + bx + c = 0 / x = ( -b ± √( b^2 - 4ac ) ) / ( 2a )
-- to solve for the two values of x, given a = 1, b = -8 and c = 5. */

var x1 = 0, x2 = 0, a = 1, b = -8, c = 5;

x1 = ( -(b) + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);

x2 = ( -(b) - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);

console.log(x1 + ", " + x2);

