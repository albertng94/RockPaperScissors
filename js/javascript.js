// //create variable roundCounter, which is used inside the do-while loop to display the counter of the rounds.

// let roundCounter = 0;

// //added a do/while loop to repeat the rock, paper, scissors program execution until one of the players (user or computer) wins 3 rounds (score = 3).

// // do {

// //while loop created to increment roundCounter by 1 and display it in the console. The variable's value is also updated.
// //inside the while loop, an if conditional is used to break the loop once roundCounter has a value over 0. 
// //this means the while loop will always break after one iteration, but since it is nested inside a parent do-while loop, it start again with each round keeping the updated value and displaying it in the console.

// function counter(roundCounter) {
//     while (true) {
//         ++roundCounter;
//         console.log("Round " + roundCounter + ":");
//         if (roundCounter > 0) {
//         break;
//         }
//     }
// }

// //Function getRandomInt returns a random integer between the two numerical parameters (included).
// //Variable randomInt executes getRandomInt function to generate a random number from 1 to 3.

// // function getRandomInt(min, max) {
// //     min = Math.ceil(min);
// //     max = Math.floor(max);
// //     return Math.floor(Math.random() * (max - min + 1) + min); 
// // }

// // let randomNumber = getRandomInt(1, 3);

// //Variable getComputerChoice is created without a value. 
// //The value given to getComputerChoice will be either "rock", "paper" or "scissors" based on randomNumber's current value. An if .. else structure is used to that end.

// // let getComputerChoice;

// // if (randomNumber === 1) {
// //     getComputerChoice = "rock";
// // } else if (randomNumber === 2) {
// //     getComputerChoice = "paper";
// // } else if (randomNumber === 3) {
// //     getComputerChoice = "scissors";
// // }

// //variables playerSelection and computerSelection are created.
// //computerSelection reflects the randomly generated symbol coming from getComputerChoice.
// //playerSelection's input comes from a prompt which the user needs to answer.
// //variable regex 1 is created to test against the prompt, making sure the user can only answer with either rock, paper or scissors (case insensitive).
// //a while loop is created so that if user gives a wrong input, and alert message displays and the prompt executes again until the user inputs an apropiate answer.

// var playerSelection;

// // let regex1 = new RegExp(/^rock$|^paper$|^scissors$/, "i");

// // while (true) {
// //     let getPlayerChoice = prompt("Choose Rock, Paper or Scissors (minus and caps both allowed)");

// //     if (regex1.test(getPlayerChoice)) {
// //         playerSelection = getPlayerChoice.toLowerCase();
// //         break;
// //     } else {
// //         alert("Invalid input. Please answer with Rock, Paper or Scissors.");
// //     }
// // }

// let computerSelection = getComputerChoice;

// //function round is created using as parameters the playerSelection and computerSelection variables.
// //function round compares the "inputs" from computer and player and uses an if ... else structure taking into account all possible matches and returning a string which narrates the result of the round and specifies the winner.
// //variable roundResult is created with the output of round function. Thus its value will be the answer to be shown to the user regarding the current round.

// function round(playerSelection, computerSelection) {
//     if (computerSelection === "rock" && playerSelection === "scissors") {
//         return ("Scissors loose to Rock. Computer wins!"); 
//     } else if (computerSelection === "scissors" && playerSelection === "rock") {
//         return ("Rock beats Scissors. You win!") 
//     } else if (computerSelection === "rock" && playerSelection === "paper") {
//         return ("Paper beats Rock. You win!")
//     } else if (computerSelection === "paper" && playerSelection === "rock") {
//         return ("Rock looses to Paper. Computer wins!")
//     } else if (computerSelection === "paper" && playerSelection === "scissors") {
//         return ("Scissors beat Paper. You win!")
//     } else if (computerSelection === "scissors" && playerSelection === "paper") {
//         return ("Paper looses to Scissors. Computer wins!")
//     } else if (computerSelection === "rock" && playerSelection === "rock") {
//         return ("Rock VS. Rock. It's a tie!")
//     } else if (computerSelection === "paper" && playerSelection === "paper") {
//         return ("Paper VS. Paper. It's a tie!")
//     } else if (computerSelection === "scissors" && playerSelection === "scissors") {
//         return ("Scissors VS. Scissors. It's a tie!")
//     } 
//     }

// let roundResult = round(playerSelection, computerSelection);
// console.log(roundResult);

//Variables playerCurrentScore and computerCurrentScore are created without an initial value.
//They will be used to keep track of the scores, incrementing its value by one when the correspondant side wins a match.
//Their value is then given through an if ... else statement, depending on the value of variables playerCurrentScoreUpdated and computerCurrentScoreUpdated, which are created later with VAR in order have a retroactive use.
//Their initial value will always be 0, but as soon as their "Updated" counterparts have a superior value, they will adopt it.

// let playerCurrentScore;
// if (playerCurrentScoreUpdated > 0) {
//     playerCurrentScore = playerCurrentScoreUpdated;
// } else {
//     playerCurrentScore = 0;
// }

// let computerCurrentScore;
// if (computerCurrentScoreUpdated > 0) {
//     computerCurrentScore = computerCurrentScoreUpdated;
// } else {
//     computerCurrentScore = 0;
// }

//Function score is created using the variables playerCurrentScore, computerCurrentScore and roundResult as parameters.
//Inside the function, new variables playerCurrentScoreUpdated and computerCurrentScoreUpdated are created. 
//These are given a value equal to their counterpart variables playerCurrentScore and computerCurrentScore, but will add +1 each time computer or player wins a round. This is accomplished through a switch statement.
//function score returns the updated score values within the newly created variables, and these are re-created in the global scope and associated to those values in order to be able to use them.
//Finally, variable currentScore is created as string that contains the updated values for computer and player scores, which will be displayed in the console after each round of the match.

// function score(playerCurrentScore, computerCurrentScore, roundResult) {
//   let playerCurrentScoreUpdated = playerCurrentScore;
//   let computerCurrentScoreUpdated = computerCurrentScore;

//   switch (roundResult) {
//     case "Rock beats Scissors. You win!":
//     case "Paper beats Rock. You win!":
//     case "Scissors beat Paper. You win!":
//       playerCurrentScoreUpdated = playerCurrentScore + 1;
//       break;
//     case "Scissors loose to Rock. Computer wins!":
//     case "Rock looses to Paper. Computer wins!":
//     case "Paper looses to Scissors. Computer wins!":
//       computerCurrentScoreUpdated = computerCurrentScore + 1;
//       break;
//   }

//   return { playerCurrentScoreUpdated, computerCurrentScoreUpdated };

// }

// var { playerCurrentScoreUpdated, computerCurrentScoreUpdated } = score(playerCurrentScore, computerCurrentScore, roundResult);

// let currentScore = ("Your score: " + playerCurrentScoreUpdated + " | " + "Computer score: " + computerCurrentScoreUpdated);
// console.log(currentScore);

// } while ((playerCurrentScoreUpdated < 3) && (computerCurrentScoreUpdated < 3));

//After the loop has been executed the required number of times, a final variable endMatch is created and its value assigned through an if ... else statement.
//The value will be displayed in the console, anouncing the winner of the match and the final score of each player, based on their acumulated scores in varaibles computerCurrentScoreUpdated and playerCurrentScoreUpdated.

// let endMatch;
// if (playerCurrentScoreUpdated === 3) {
//     endMatch = "You win the game " + playerCurrentScoreUpdated + " to " + computerCurrentScoreUpdated + "!!!"
// } else {
//     endMatch = "Computer wins the game " + computerCurrentScoreUpdated + " to " + playerCurrentScoreUpdated + "!!!"
// }

// console.log(endMatch);





//UI//

const clickedPaper = document.getElementById("paper");
const clickedRock = document.getElementById("rock");
const clickedScissors = document.getElementById("scissors");
const roundCounterOutput = document.getElementById("round-counter");
const roundResult = document.getElementById("round-results");
const playerRoundScore = document.getElementById("player-current-score");
const computerRoundScore = document.getElementById("computer-current-score");
const endMatchResults = document.getElementById("end-match-results");
const playAgain = document.getElementById("play-again");


let roundCounter = 0;
let roundResultOutput;
let playerScore = 0;
let computerScore = 0;
let endMatchResultsOutput = "";


clickedPaper.addEventListener("click", () => {
    startRound("paper");
});

clickedRock.addEventListener("click", () => {
    startRound("rock");
});

clickedScissors.addEventListener("click", () => {
    startRound("scissors");
});

function startRound(userSelection) {
    roundCounter += 1
    const computerSelection = getComputerChoice();
    playRound(userSelection, computerSelection);
    endMatch();
    render();
}

function playRound(playerChoice, computerChoice) {
    let result = null;

    if (computerChoice === playerChoice) {
        displayRound(playerChoice, computerChoice, "draw");
    }
    else if (playerChoice === "paper") {
        result = computerChoice === "rock" ? "win" : "lose";
        displayRound(playerChoice, computerChoice, result);
        scoreRound(result);
    }
    else if (playerChoice === "rock") {
        result = computerChoice === "scissors" ? "win" : "lose";
        displayRound(playerChoice, computerChoice, result);
        scoreRound(result);
    }
    else if (playerChoice === "scissors") {
        result = computerChoice === "paper" ? "win" : "lose"
        displayRound(playerChoice, computerChoice, result);
        scoreRound(result);
    }
}


function displayRound(playerChoice, computerChoice, result) {
    if (result === "win") {
        roundResultOutput = `${playerChoice} beats ${computerChoice}. You win!`;
    }
    else if (result === "lose") {
        roundResultOutput = `${playerChoice} looses to ${computerChoice}. Computer wins!`;
    }
    else if (result === "draw") {
        roundResultOutput = `${playerChoice} VS. ${computerChoice}. It's a tie!`;
    }
}

function scoreRound(result) {
    if (result === "win") {
        playerScore += 1;
    } else if (result === "lose") {
        computerScore += 1;
    }
}

function endMatch() {
    if (playerScore === 3) {
        endMatchResultsOutput = `You win the game ${playerScore} to ${computerScore}!!!`;
    } else if (computerScore === 3) {
        endMatchResultsOutput = `Computer wins the game ${computerScore} to ${playerScore}!!!`;
    }
}

function render() {
    roundCounterOutput.textContent = `${roundCounter}`;
    roundResult.textContent = `${roundResultOutput}`;
    playerRoundScore.textContent = `${playerScore}`;
    computerRoundScore.textContent = `${computerScore}`;
    endMatchResults.textContent = `${endMatchResultsOutput}`;
}

playAgain.addEventListener("click", () => {
    window.location.reload();
});

function getComputerChoice() {

    const randomNumber = getRandomInt(1, 3);
    let computerChoice = null;

    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "paper";
    } else if (randomNumber === 3) {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}


    
