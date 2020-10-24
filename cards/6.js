/* 
Jessica Walker
Homework 6: Cards
*/

const PokerEvaluator = require('poker-evaluator');
const cardsToDeal = 10;
var hand1 = [];
var hand2 = [];

dealCards(createDeck());
evaluateHands(hand1, hand2);

function createDeck() {
    var value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];
    var suit = ["c", "s", "h", "d"];
    var cardDeck = [];
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
    var j = 0, k = 0;  // tracks indices of hands

    for (var i = 0; i < cardsToDeal; i++) {

        // pick a random card from deck and remove it from the deck
        randomCard = Math.floor(Math.random() * cardDeck.length);
        dealtCard = cardDeck.splice(randomCard, 1).toString();

        // alternate dealing cards between players
        if (i % 2 == 0) {
            hand1[j] = dealtCard;
            j++;
        }
        else {
            hand2[k] = dealtCard;
            k++;
        }
    }
}

function evaluateHands(hand1, hand2) {
    // individual json objects from PokerEvaluator
    var hand1Evaluated = PokerEvaluator.evalHand(hand1);
    var hand2Evaluated = PokerEvaluator.evalHand(hand2);

    // processes hand format to readable string text
    var readableHand1 = hand1.toString().replace(/,/g, " ");
    var readableHand2 = hand2.toString().replace(/,/g, " ");

    // display hands and their hand types
    console.log("Hand 1: " + readableHand1 + "  " + hand1Evaluated.handName);
    console.log("Hand 2: " + readableHand2 + "  " + hand2Evaluated.handName);
    
    // declare winner
    if (hand1Evaluated.value > hand2Evaluated.value) {
        console.log("\nHand 1 wins!");
    }
    else if (hand1Evaluated.value < hand2Evaluated.value) {
        console.log("\nHand 2 wins!");
    }
    else {
        console.log("\nIt's a tie!");
    }
}