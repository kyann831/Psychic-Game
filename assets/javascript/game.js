var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = " ";
var userGuess = " ";
var losses = 0;
var wins = 0;
var guessesSoFar = [];
var guessesLeft = 9;

computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerGuess);

document.onkeyup = function(event) {
  var userGuess = event.key;
  console.log(userGuess);
  var userGuessLower = userGuess.toLowerCase();
  if (alphabet.indexOf(userGuessLower) == -1){
    // invalid guess
    console.log("invalid");
    return;
  } 

  // missed guess
  if (userGuessLower !== computerGuess) {
    guessesLeft--; 
    document.getElementById("guessesleft").innerHTML = guessesLeft;
    console.log('checking guess');
    guessesSoFar.push(userGuessLower);
    document.getElementById("userguess").innerHTML = guessesSoFar;
  // winning guess
  } else { 
    // winner winner chicken dinner!!
    wins++;
    document.getElementById("wins").innerHTML = wins;
    guessesSoFar = [];
    guessesLeft = 9;
    document.getElementById("guessesleft").innerHTML = guessesLeft;
    document.getElementById("userguess").innerHTML = guessesSoFar;

  }
  
  // reset game and game loss
  if (guessesLeft == 0) {
    losses++;
    guessesSoFar = [];
    guessesLeft = 9;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesleft").innerHTML = guessesLeft;
    document.getElementById("userguess").innerHTML = guessesSoFar;
  }
}
