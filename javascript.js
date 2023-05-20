

//Function getRandomInt returns a random integer between the two numerical parameters (included)
//Variable randomInt executes getRandomInt function to generate a random number from 1 to 3 and converts the result to the string type.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

let randomInt = getRandomIntInclusive(1, 3).toString();
console.log(randomInt);
