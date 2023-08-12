// Variables are created to store the DOM Nodes data which will be receiving input from the "javascript.js" file.

const clickedPaper = document.getElementById("paper");
const clickedRock = document.getElementById("rock");
const clickedScissors = document.getElementById("scissors");
const roundCounterOutput = document.getElementById("round-counter");
const roundResult = document.getElementById("round-results");
const playerRoundScore = document.getElementById("player-current-score");
const computerRoundScore = document.getElementById("computer-current-score");
const endMatchResults = document.getElementById("end-match-results");
const playAgain = document.getElementById("play-again");

//gobal variables that will be updated throughout the script run are created.

let roundCounter;
let roundResultOutput;
let playerScore;
let computerScore;
let endMatchResultsOutput;
initGame()
render()

// Event listeners are created for the three html input elements "imgs" which will react to the user clicks.
// When the events happen (the user chooses and clicks), the function "startRound" will run with a "paper", "rock", or
// "scissors" argument according to which of them was selected.

clickedPaper.addEventListener("click", () => {
    startRound("paper");
});

clickedRock.addEventListener("click", () => {
    startRound("rock");
});

clickedScissors.addEventListener("click", () => {
    startRound("scissors");
});

// Function startRound acts as the main "game function", as it is the most abstract from the script and calls other "more
// specific" functions which make sure the game is played as expected.

// startRound: 
// Updates the global variable "roundCounter" adding 1.
// Creates variable computerSelection and gives it the return value for function "getComputerChoice()".
// Runs "playRound(userSelection, computerSelection)" function. 
// Runs "endMatch()" function.
// Runs "render()" function.

function startRound(userSelection) {
    roundCounter += 1
    const computerSelection = getComputerChoice();
    playRound(userSelection, computerSelection);
    endMatch();
    render();
}

 // Creation of "playRound" function, which uses "playerChoice" and "computerChoice" variables as arguments.

 // playRound:
 // Creates variable "result" with null value.
 // Has an if ... else if statement to contemplate win/lose/draw game cases according to player and computer selections.
 // For "win" or "lose" cases, result variable will be updated according to this value (used a ternary operator to keep
 // the code as simple as possible).
 // displayRound function is run with variables "playerChoice", "computerChoice", and "result" as arguments.
 // scoreRound is run with "result" variable as parameter.

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

//

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
    roundCounterOutput.textContent = `Round: ${roundCounter}`;
    roundResult.textContent = `${roundResultOutput}`;
    playerRoundScore.textContent = `${playerScore}`;
    computerRoundScore.textContent = `${computerScore}`;
    endMatchResults.textContent = `${endMatchResultsOutput}`;
}

function initGame() {
    roundCounter = 1;
    roundResultOutput = "";
    playerScore = 0;
    computerScore = 0;
    endMatchResultsOutput = "";
}

playAgain.addEventListener("click", () => {
    initGame();
    render();
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


    
