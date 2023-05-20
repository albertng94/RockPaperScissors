

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