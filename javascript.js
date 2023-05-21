

//Function getRandomInt returns a random integer between the two numerical parameters (included).
//Variable randomInt executes getRandomInt function to generate a random number from 1 to 3.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

let randomNumber = getRandomInt(1, 3);
console.log(randomNumber);

//Variable getComputerChoice is created without a value. 
//The value given to getComputerChoice will be either "rock", "paper" or "scissors" based on randomNumber's current value. An if .. else structure is used to that end.

let getComputerChoice;

if (randomNumber === 1) {
    getComputerChoice = "rock";
} else if (randomNumber === 2) {
    getComputerChoice = "paper";
} else if (randomNumber === 3) {
    getComputerChoice = "scissors";
}

console.log(getComputerChoice);

//variables playerSelection and computerSelection are created.
//computerSelection reflects the randomly generated symbol coming from getComputerChoice.
//playerSelection's input comes from a prompt which the user needs to answer.
//variable regex 1 is created to test against the prompt, making sure the user can only answer with either rock, paper or scissors (case insensitive).
//a while loop is created so that if user gives a wrong input, and alert message displays and the prompt executes again until the user inputs an apropiate answer.

var playerSelection;

let regex1 = new RegExp(/rock|paper|scissors/, "i");

while (true) {
    let getPlayerChoice = prompt("Choose Rock, Paper or Scissors (minus and caps both allowed)");

    if (regex1.test(getPlayerChoice)) {
        playerSelection = getPlayerChoice.toLowerCase();
        break;
    } else {
        alert("Invalid input. Please answer with Rock, Paper or Scissors.");
    }
}

let computerSelection = getComputerChoice;

console.log(playerSelection);
console.log(computerSelection);

//function round is created using as parameters the playerSelection and computerSelection variables.
//function round compares the "inputs" from computer and player and uses an if ... else structure taking into account all possible matches and returning a string which narrates the result of the round and specifies the winner.
//variable roundResult is created with the output of round function. Thus its value will be the answer to be shown to the user regarding the current round.

function round(playerSelection, computerSelection) {
    if (computerSelection === "rock" && playerSelection === "scissors") {
        console.log("Scissors loose to Rock. Computer wins!"); 
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        return ("Rock beats Scissors. You win!") 
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        return ("Paper beats Rock. You win!")
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return ("Rock looses to Paper. Computer wins!")
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        return ("Scissors beat Paper. You win!")
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return ("Paper looses to Scissors. Computer wins!")
    } else if (computerSelection === "rock" && playerSelection === "rock") {
        return ("Rock VS. Rock. It's a tie!")
    } else if (computerSelection === "paper" && playerSelection === "paper") {
        return ("Paper VS. Paper. It's a tie!")
    } else if (computerSelection === "scissors" && playerSelection === "scissors") {
        return ("Scissors VS. Scissors. It's a tie!")
    } 
    }

let roundResult = round(playerSelection, computerSelection);
console.log(roundResult);

//Variables playerCurrentScore and computerCurrentScore are created with an initial value of 0.
//They will be used to keep track of the scores, incrementing its value by one when the correspondant side wins a match.

let playerCurrentScore = 0;
let computerCurrentScore = 0;

//Function score is created using the variables playerCurrentSocre, computerCurrentScore and roundResult as parameters.
//Inside the function, new variables playerCurrentScoreUpdated and computerCurrentScoreUpdated are created. 
//These are given a score of 0 as initial value, but will add +1 each time computer or player wins a round. This is accomplished through a switch statement.
//function score returns the updated score values within the newly created variables, and these are re-created in the global scope and associated to those values in order to be able to use them.
//Finally, variable currentScore is created as string that contains the updated values for computer and player scores, which will be displayed in the console after each round of the match.

function score(playerCurrentScore, computerCurrentScore, roundResult) {
  let playerCurrentScoreUpdated = playerCurrentScore;
  let computerCurrentScoreUpdated = computerCurrentScore;

  switch (roundResult) {
    case "Rock beats Scissors. You win!":
    case "Paper beats Rock. You win!":
    case "Scissors beat Paper. You win!":
      playerCurrentScoreUpdated = playerCurrentScore + 1;
      break;
    case "Scissors loose to Rock. Computer wins!":
    case "Rock looses to Paper. Computer wins!":
    case "Paper looses to Scissors. Computer wins!":
      computerCurrentScoreUpdated = computerCurrentScore + 1;
      break;
  }

  return { playerCurrentScoreUpdated, computerCurrentScoreUpdated };
}

let { playerCurrentScoreUpdated, computerCurrentScoreUpdated } = score(playerCurrentScore, computerCurrentScore, roundResult);

let currentScore = ("Your score: " + playerCurrentScoreUpdated + " | " + "Computer score: " + computerCurrentScoreUpdated);
console.log(currentScore);



