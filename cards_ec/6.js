/* 
Jessica Walker
Homework 6: Cards
*/

/*
For an additional (up to) 20 points:

v Complete the 5 points requirements.
* Create and track a player "bank". 
v The bank begins with $1,000.
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
var playerBank = 1000;
var playerBet;
var hand1 = [];
var hand2 = [];

askUserToPlay();

function askUserToPlay() {
    rlintf.question("\nDeal New Hand: Press \"D\"   Quit Game: Press \"Q\"\n\nD or Q? ", (answer) => chooseUserPath(answer));
    //askForBet();
}

// does a callback need to make this work?
//var ask = askForBet();
//function chooseUserPath(userPlayOrQuit, ask) {
    function chooseUserPath(userPlayOrQuit) {


    if (userPlayOrQuit == "D" || userPlayOrQuit == "d") {
        console.clear();
        //askForBet();
        dealCards(createDeck());
        evaluateHands(hand1, hand2);
        // add bank update
        askUserToPlay();
    }

    else if (userPlayOrQuit == "Q" || userPlayOrQuit == "q") {
        rlintf.close();
        console.log("\nThanks for playing!");
    }

    else {
        console.error(userPlayOrQuit + " is not a valid option.\n");
        askUserToPlay();
    }
}

function askForBet() {
    rlintf.question("\nWhat is your bet for this hand? ", (bet) => makeABet(bet));
}

function makeABet(bet) {
/*
* The bank begins with $1,000.
* After the screen is cleared, before the hand is dealt, ask the player to make a bet.
* Assume player 1 is betting, player 2 is the dealer.
* Bets must be greater than $0 but less than or equal to the amount in the bank.
*/

    if (bet <= 0 || bet > playerBank) {
        console.error("This bet is invalid.");
        askForBet();
    }
    else {
        playerBet = bet;
    }
}

function updateBank(bet) {
/*
* If the player wins a hand, the bank increases by the amount of the bet.
* If the player loses a hand, the bank decreases by the amount of the bet.
* If it is a tie, the player bank does not increase or decrease.
* Display the level of the players bank after each hand.
* If the bank hits $0 dollars, the game is over and the player is ejected from the casino.
*/

    if (bet > 0) {
        playerBank += bet;
        console.log("Current bank amount: $" + playerBank);
    }

    else if (bet < 0) {
        playerBank -= bet;
        console.log("Current bank amount: $" + playerBank);
        if (playerBank <= 0) {
            console.log("Game over, man!\n\n" + stickGuy);
            chooseUserPath("Q");
        }
    }

    else {
        console.error("Something went wrong.");
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
    console.log("\nHand 1: " + readableHand1 + "  " + hand1Evaluated.handName);
    console.log("Hand 2: " + readableHand2 + "  " + hand2Evaluated.handName);
    
    // declare winner
    if (hand1Evaluated.value > hand2Evaluated.value) {
        console.log("\nHand 1 wins!");
        updateBank(playerBet);
    }
    else if (hand1Evaluated.value < hand2Evaluated.value) {
        console.log("\nHand 2 wins!");
        updateBank(-(playerBet));
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