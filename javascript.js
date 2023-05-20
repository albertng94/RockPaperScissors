

//Function getRandomInt returns a random integer between the two numerical parameters (included).
//Variable randomInt executes getRandomInt function to generate a random number from 1 to 3.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

let randomNumber = getRandomInt(1, 3);
console.log(randomNumber);

//Variable randomSymbol is created without a value. 
//The value given to randomSymbol will be either "rock", "paper" or "scissors" based on randomNumber's current value. An if .. else structure is used to that end.
let randomSymbol;

if (randomNumber === 1) {
    randomSymbol = "rock";
} else if (randomNumber === 2) {
    randomSymbol = "paper";
} else if (randomNumber === 3) {
    randomSymbol = "scissors";
}

console.log(randomSymbol);