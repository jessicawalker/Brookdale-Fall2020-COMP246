/* 
Jessica Walker
Homework 6: Cards
*/

/*
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

    console.log("Hand 1: " + player1Hand.toString().replace(/,/g, " ") + "  " + player1.handName);
    console.log("Hand 2: " + player2Hand.toString().replace(/,/g, " ") + "  " + player2.handName);
    
    if (player1.value > player2.value) {
        console.log("\nHand 1 wins!");
    }
    else if (player1.value < player2.value) {
        console.log("\nHand 2 wins!");
    }
    else {
        console.log("\nIt's a tie!");
    }
}

dealCards(createDeck());
evaluateHands(player1Hand, player2Hand);

//console.log(player1Hand);
//console.log(player2Hand);