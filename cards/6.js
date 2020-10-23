/* 
Jessica Walker
Homework 6: Cards
*/

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

const PokerEvaluator = require('poker-evaluator');
const cardsToDeal = 10;
var cardDeck = [];
var player1Hand = [];
var player2Hand = [];

function createDeck() {
    var value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];
    var suit = ["c", "s", "h", "d"];
    var k = 0;  // tracks index of cardDeck array

    // concat value and suit to create card
    for (var i = 0; i < value.length; i++) {
        for (var j = 0; j < suit.length; j++) {
            cardDeck[k] = value[i] + suit[j];
            k++;
        }
    }

    return cardDeck;
}

function dealCards(cardDeck) {
    var randomCard, dealtCard;
    var j = 0, k = 0;
    var currentCardDeck = cardDeck.concat();

    for (var i = 0; i < cardsToDeal; i++) {
        randomCard = Math.floor(Math.random() * currentCardDeck.length);
        dealtCard = currentCardDeck.splice(randomCard, 1).toString();
        if (i % 2 == 0) {
            player1Hand[j] = dealtCard;
            j++;
        }
        else {
            player2Hand[k] = dealtCard;
            k++;
        }
    }
}

function evaluateHands(player1Hand, player2Hand) {
    var player1 = PokerEvaluator.evalHand(player1Hand);
    var player2 = PokerEvaluator.evalHand(player2Hand);
    
    if (player1.value > player2.value) {
        console.log("Player 1 wins!");
        console.log(player1.value + " vs. " + player2.value);
    }
    else if (player1.value < player2.value) {
        console.log("Player 2 wins!");
        console.log(player1.value + " vs. " + player2.value);
    }
    else {
        console.log("It's a tie!");
        console.log(player1.value + " vs. " + player2.value);
    }
}

dealCards(createDeck());
evaluateHands(player1Hand, player2Hand);

//console.log(player1Hand);
//console.log(player2Hand);