var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 var computerGuess = " ";
 var userGuess = " ";
 var losses = 0;
 var wins = 0;
 var soFar = [];
var guessesLeft = 10;

computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerGuess);

document.onkeyup = function(event) {
  var userGuess = event.key;
  if (userGuess !== computerGuess) {
    guessesLeft--; 
    document.getElementById("guessesleft").innerHTML=guessesLeft;
  }

}
