/* 
Jessica Walker
Homework 6: Cards
*/

const PokerEvaluator = require('poker-evaluator');

/*
Write a Node.js program that does the following:

Save the program to a file named 6.js .

Create a standard deck of 52 cards (e.g., "As", "2s", "3s", ... , "Td", "Jd", "Qd", "Kd"). Note that you must use T (not 10) to indicate the rank Ten.

Deal ten unique, random cards to two players, alternating the deal.

Compare the two five-card poker hands and determine the winner.

Use the poker-evaluator (Links to an external site.) npm library to evaluate the two poker hands.
Save the poker-evaluator npm module; generate the package.json and package-lock.json files to save the external library information.

Submit 6.js, package.json, and package-lock.json to Canvas.

You must format your output like below:

    $ node 6.js
    Hand 1: Qs 7c Kd 2h 8c  high card
    Hand 2: Ad 6d 4h Jd Ah  one pair

    Hand 2 wins!
*/

// TODO
// create array of card deck
// create an array copy of card deck for "this round"
// create an array for player 1 hand
// create an array for player 2 hand
// create const CARDS_HANDED = 10

// uses Math.ceil(Math.random() * thisRoundDeckArray.length) to pick cards (as length keeps getting smaller)
// use array.splice(randomCard, 1) to take card out of "this round" deck
// while in a for loop, if i is even, give it to one hand, if i is odd, give it to the other hand
// end loop at CARDS_HANDED

// use poker-evaluator npm module to evalHand() and compare value of each eval to determine winner
// example: PokerEvaluator.evalHand([17, 22, 27, 32, 33]);
//  { handType: 5,
//      handRank: 6,
//      value: 20486,
//      handName: 'straight' }
// 
// explanation of what is returned:
// handType: number; // Index of the HAND_TYPES array  
// handRank: number; // Rank within the handType  
// value: number; // Overall value of this hand, the higher the better. USE THIS TO DETERMINE WINNER OF A HAND  
// handName: HandName; // Human readable name of the hand