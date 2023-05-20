

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

//Variables playerCurrentScore and computerCurrentScore are created with an initial value of 0.
//They will be used to keep track of the scores, incrementing its value by one when the correspondant side wins a match.

playerCurrentScore = 0;
computerCurrentScore = 0;

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



