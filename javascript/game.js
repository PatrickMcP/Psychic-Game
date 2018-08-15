var wins = 0
var losses = 0
var compChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var compGuess = []
var guessLeft = 9
var guessMade = []
//start up the game
psychicGame();
// Define main Game function
function psychicGame() {
    //generate a guess for the computer
    var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
    //check user guesses vs stored computer value
    document.onkeyup = function (event) {
        var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
        // Make Sure the user picked a letter
        if (event.keyCode < 65 || event.keyCode > 90) {
            alert("Please pick a letter");
        //check if correct guess
        }
        else if (userChoice == compGuess) {
            wins++;
            document.getElementById("wins").innerHTML = "Wins: " + wins;
            alert("You win!")
            resetGame();
        }
        //lower count of guess left
        else if ((userChoice != compGuess) && (guessLeft > 0)) {
            guessLeft--;
            guessMade.push(userChoice);
            document.getElementById("guessmade").innerHTML = "Guesses made: " +guessMade;
            document.getElementById("guessleft").innerHTML = "Guesses left: " +guessLeft;
        }
        //count loss at end of guess/reset game
        else {
            losses++
            document.getElementById("losses").innerHTML = "Losses: " + losses;
            console.log("You loose!")
            resetGame();
            alert("You Loose =(")
        }
    }
}
//Reset the game at win or when out of guesses
function resetGame () {
    guessLeft = 9;
    guessMade = [];
    psychicGame ();
}