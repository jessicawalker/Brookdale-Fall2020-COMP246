/* 
Jessica Walker
Homework 6, Extra Credit Version: Cards

Packages used:
    readline -- core module
    poker-evaluator -- https://www.npmjs.com/package/poker-evaluator
    shuffle-array -- https://www.npmjs.com/package/shuffle-array
*/

const readline = require("readline");
const rlintf = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const PokerEvaluator = require('poker-evaluator');
const shuffle = require('shuffle-array');

const cardsToDeal = 10;
var playerBank = 1000;
var playerBet;
var hand1 = [];
var hand2 = [];

console.clear();
askUserToPlay();

function askUserToPlay() {
    console.log("\n========== CARE FOR A GAME OF POKER? ==========");
    rlintf.question("\nDeal New Hand: Press \"D\"   Quit Game: Press \"Q\"\n\nD or Q? ", (userPlayOrQuit) => chooseUserPath(userPlayOrQuit));
}

function chooseUserPath(userPlayOrQuit) {

    if (userPlayOrQuit == "D" || userPlayOrQuit == "d") {
        rlintf.question("\nWhat is your bet for this hand? $", (bet) => play(bet));
    }

    else if (userPlayOrQuit == "Q" || userPlayOrQuit == "q") {
        rlintf.close();
        console.log("\nThanks for playing!");
        process.exit();
    }

    else {
        console.error(userPlayOrQuit + " is not a valid option.\n");
        askUserToPlay();
    }
}

function play(bet) {

    // prevent bad bet amounts
    if (bet <= 0 || bet > playerBank || isNaN(bet)) {
        console.error("This bet is invalid. Try again.");
        chooseUserPath("D");
    }

    // executes the game
    else {
        playerBet = bet;
        console.clear();
        console.log("========= HERE IS THIS ROUND'S RESULT =========");
        
        dealCards(createDeck());
        evaluateHands(hand1, hand2);
        askUserToPlay();
    }
}

function updateBank(bet) {
    playerBank += parseInt(bet);
    console.log("Current bank amount: $" + playerBank);

    // stop game when bank is empty
    if (playerBank <= 0) {
        console.log("\n======== YOUR BANK IS EMPTY! GAME OVER ========\n\n" + stickGuy);
        chooseUserPath("Q");
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
    var j = 0, k = 0;  // tracks indices of hands

    // shuffle deck before dealing cards
    shuffle(cardDeck);

    for (var i = 0; i < cardsToDeal; i++) {

        // alternate dealing cards between players
        if (i % 2 == 0) {
            hand1[j] = cardDeck[i];
            j++;
        }
        else {
            hand2[k] = cardDeck[i];
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