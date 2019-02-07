//need to be inside script tag???
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesMade = [];
var guessesLeft = 5;

//math.floor
//on.key

document.onkeyup = function (event) {
    var userGuess = event.key;

    var computerGuess = letters[Math.floor(Math.random() * letters.length)];

    if (userGuess === computerGuess) { //if userGuess is same as computerGuess, guessesLeft decreases and wins increases.
        guessesLeft--;
        wins++;
    };
    if (userGuess !== computerGuess) { //if userG is not same as computer, guessesLeft decreases, guesses made displays the letters.
        guessesLeft--;
        guessesMade.push(userGuess);  //userguess is pushed into guessesMade (Don't just read left to right)//
    };
    if (guessesLeft < 0) { //if guessesLeft is less than 0, losses increase.
        losses++;           // max guesses is 5 before game starts over. 
        guessesLeft = 5
        document.getElementById("guesses-left").innerHTML = "Guesses Left:" + guessesLeft;
        guessesMade = []
        document.getElementById("guesses-made").innerHTML = "Your guesses so far:" + guessesMade;
    }

    document.getElementById("wins").innerHTML = "Wins:" + wins; //in order for html to display, this needs to be present. An Id needs to be attached to each p in this case.
    document.getElementById("losses").innerHTML = "Losses:" + losses;
    document.getElementById("guesses-left").innerHTML = "Guesses Left:" + guessesLeft;
    document.getElementById("guesses-made").innerHTML = "Your guesses so far:" + guessesMade;
};


