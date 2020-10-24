/* 
Jessica Walker
Homework 6: Cards
*/

/*
For up to 5 points, add the following functionality to your Homework # 6 solution:

* Enable the game to be played repeatedly by having the player enter a "D" in the console to deal a new hand or a "Q" to quit the game.
* Clear the screen before each deal.

For an additional (up to) 20 points:

* Complete the 5 points requirements.
* Create and track a player "bank". 
* The bank begins with $1,000.
* After the screen is cleared, before the hand is dealt, ask the player to make a bet.
* Assume player 1 is betting, player 2 is the dealer.
* Bets must be greater than $0 but less than or equal to the amount in the bank.
* If the player wins a hand, the bank increases by the amount of the bet.
* If the player loses a hand, the bank decreases by the amount of the bet.
* If it is a tie, the player bank does not increase or decrease.
* Display the level of the players bank after each hand.
* If the bank hits $0 dollars, the game is over and the player is ejected from the casino.

*/

const readline = require("readline");
const rlintf = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const PokerEvaluator = require('poker-evaluator');

const cardsToDeal = 10;
var hand1 = [];
var hand2 = [];
var userPlayOrQuit = "Q";

askUserToPlay();

function askUserToPlay() {
    rlintf.question("Deal: Press \"D\"   Quit: Press \"Q\"", chooseUserPath(userPlayOrQuit));
}

function chooseUserPath(userPlayOrQuit) {

    if (userPlayOrQuit == "Q" || userPlayOrQuit == "q") {
        rlintf.close();
        console.log("Thanks for playing!\n");
    }

    else if (userPlayOrQuit == "D" || userPlayOrQuit == "d") {
        rlintf.close();
        dealCards(createDeck());
        evaluateHands(hand1, hand2);
        askUserToPlay();
    }

    else {
        console.error(userPlayOrQuit + " is not a valid option.");
    }
}

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

var stickGuy = `
Dealer
 ○ 
く|)へ
  〉 
 ￣￣┗┓          Player
 　 　 ┗┓　     ヾ○ｼ
  　　   ┗┓   ヘ/ 　 　 
 　        ┗┓ノ 
　 　 　 　 　┗┓
`;

//console.log(stickGuy);