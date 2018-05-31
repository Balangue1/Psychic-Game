$(document).ready(function(){
 });

// Here we are provide an initial array of letters for testing purposes
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Initialize variables
var winCnt = 0;
var lossCnt = 0;
var guessCnt = 10;
var i=0;
var allGuesses = [];

// newGame function to reset guess count and letters guessed 
function newGame(){
//Reset all game info
guessCnt = 10;
i=0;
};

// This function is run whenever the userGuess is the same as the computerGuess
function winFunction(){
document.getElementById("winStat").innerHTML = 
"Wins: " + winCnt;
}

// Run winFunction
winFunction();


// This function is run whenever the user is unable to guess the correct answer (computerGuess) after 10 tries
function lossFunction(){
document.getElementById("lossStat").innerHTML = 
"Losses: " + lossCnt;
}

// Run lossFunction
lossFunction();

// This function is run whenever the user guesses wrong and displays the number of guesses left
function guessNumFunction(){
document.getElementById("guessNumStat").innerHTML = 
"Guesses Left: " + guessCnt;
};

// Run guessNumFunction
guessNumFunction();

// This function is run whenever the user presses a key.

document.onkeyup = function(event) {
   
// Determines which key was pressed.
    
var userGuess = event.key;
// Converts userGuess to lowercase to compare computerGuess
userGuess = userGuess.toLowerCase();
  
// Pushes(Append) userGuess to screen
allGuesses.push(userGuess);
     
// This function displays All guesses so far
function yourGuesses(){
    document.getElementById("yourGuesses").innerHTML = 
    "You're Guesses so far: " + allGuesses;
 
 };

//  This function clears all letter guessses if user Wins or Loses
function clearGuesses(){
  document.getElementById("yourGuesses").innerHTML = 
  "You're Guesses so far: ";
} ;

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


/* If userGuess equals computerGuess add 1 to Wins and clear letters guessed 
   If userGuess does not equal computerGuess subtract 1 from guessCnt */
    if (userGuess === computerGuess) {
      allGuesses = []
      winCnt = winCnt + 1
      winFunction()
      clearGuesses()
      newGame()
    }
    else{
      guessCnt = guessCnt - 1
      lossFunction()
      yourGuesses()
      };

  
// If guessCnt equal 0, add 1 to Losses and clear letters guessed
    if (guessCnt === 0){
      allGuesses = []
      lossCnt = lossCnt + 1
      lossFunction()
      clearGuesses()
      newGame()
        }
// Run guessNumFuction        
    guessNumFunction();

    };
    