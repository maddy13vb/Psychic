//need to be inside script tag???
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesMade = 5;
var guessesLeft = [];

//math.floor
//on.key


document.onkeyup = function (event) {
    var userGuess = event.key;

    var computerGuess = letters[Math.floor(Math.random() * letters.length)];

    if (guessesMade === computerGuess) {
        guessesLeft--;
        wins++;
    };
    if (guessesMade !== computerGuess) {
        guessesLeft--;
        letters.push(guessesMade);
    };
    if (guessesLeft === 0) {
        losses++;
    };
    userGuess.textContent = "You guessed: " + userGuess;
}; //not showing up???

// Letters showing up in console.log but not browser???

