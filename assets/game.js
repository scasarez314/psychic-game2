// Variables
var Wins = 0;
var Losses = 0;
var somePTag = document.getElementById('something');
var gameWins = document.getElementById("Wins");
var gameLosses = document.getElementById("Losses");
var letter = document.getElementById("guessedLetters");
var playerGuess = [];


// " Guess What Letter I'm Thinking "
var aBc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var guessesLeft = 10;
var computerGuess;

console.log(guessesLeft);
document.getElementById('lettersGuessed').innerText = "Guesses Left:" + " " + guessesLeft;

function restart() {

    computerGuess = aBc[Math.floor(Math.random() * aBc.length)];
    console.log(computerGuess);
}

function promtToplay() {
    var playAgain = prompt("Play Again? Y / N");
    if (playAgain.toLocaleLowerCase() === "y")
        restart();

}

restart();
// " Letters You've Guessed: "

document.onkeydown = function (event) {

    var guess = event.key;
    playerGuess.push(guess);
    letter.innerHTML = "Letters guessed: " + playerGuess
    console.log(lettersGuessed);
    console.log(playerGuess);

    if (guess.toLocaleLowerCase() === computerGuess) {
        Wins++;
        guessesLeft = 10;
        gameWins.innerHTML = "Wins: " + Wins;
        promtToplay();

        console.log()
    }

    else {
        guessesLeft--;
        document.getElementById('lettersGuessed').innerText = "Guesses Left:" + " " + guessesLeft;
        if (guessesLeft <= 0) {
            Losses++;
            gameLosses.innerHTML = "Losses: " + Losses;
            promtToplay();

            console.log("Losses: " + Losses);
        }
    }

}
