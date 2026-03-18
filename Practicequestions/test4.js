const secretNum = 25; 
let guess = prompt("Guess the number:");

while (guess != secretNum) {
  guess = prompt("Wrong! Guess again:");
}

alert("Congrats! You entered the right number.");
