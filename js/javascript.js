// Variables are created to store the DOM Nodes data which will be receiving input from the "javascript.js" file.

const clickedPaper = document.getElementById("paper");
const clickedRock = document.getElementById("rock");
const clickedScissors = document.getElementById("scissors");
const roundCounterOutput = document.getElementById("round-counter");
const roundResult = document.getElementById("round-results");
const playerRoundScore = document.getElementById("player-current-score");
const computerRoundScore = document.getElementById("computer-current-score");
const hideDiv = document.getElementById("main-div");
const popup = document.getElementById("popup");
const endMatchResults = document.getElementById("end-match-results");
const playAgain = document.getElementById("play-again");

// Global variables that will be updated throughout the script run are created.
// "initGame" and "render" functions are executed at this time to import all the pre-game values to the UI.

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
    startRound("Paper");
});

clickedRock.addEventListener("click", () => {
    startRound("Rock");
});

clickedScissors.addEventListener("click", () => {
    startRound("Scissors");
});

// Function startRound acts as the main "game function", as it is the most abstract from the script and calls other "more
// specific" functions which make sure the game is played as expected.

// startRound: 
// Updates the global variable "roundCounter" adding 1.
// Creates variable computerSelection and gives it the return value for function "getComputerChoice()".
// Runs "playRound(playerChoice, computerChoice)" function. 
// Runs "endMatch()" function.
// Runs "render()" function.

function startRound(playerChoice) {
    roundCounter += 1
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
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
    else if (playerChoice === "Paper") {
        result = computerChoice === "Rock" ? "win" : "lose";
        displayRound(playerChoice, computerChoice, result);
        scoreRound(result);
    }
    else if (playerChoice === "Rock") {
        result = computerChoice === "Scissors" ? "win" : "lose";
        displayRound(playerChoice, computerChoice, result);
        scoreRound(result);
    }
    else if (playerChoice === "Scissors") {
        result = computerChoice === "Paper" ? "win" : "lose"
        displayRound(playerChoice, computerChoice, result);
        scoreRound(result);
    }
}

// Creation of "displayRound" function, which uses "playerChoice", "computerChoice", and "result" as arguments.

// displayRound:
// Contains an if ... else statement depending on variable result being equal to "win", "lose", or "draw".
// For "win", "lose", or draw cases, global variable "roundResultOutput" is given a different text which will end up being
// displayed in the DOM.

function displayRound(playerChoice, computerChoice, result) {
    if (result === "win") {
        roundResultOutput = `${playerChoice} defeats ${computerChoice}. You win the round!`;
    }
    else if (result === "lose") {
        roundResultOutput = `${playerChoice} is defeated by ${computerChoice}. Computer wins the round!`;
    }
    else if (result === "draw") {
        roundResultOutput = `${playerChoice} vs. ${computerChoice}. It's a tie!`;
    }
}

// Creation of "scoreRound" function, which uses "result" as an argument.

// scoreRound:
// Contains and if ... else statement depending on variable "result".
// Depending on "win", "lose" cases, global variables "playerScore" or "computerScore" are added 1, so their match scores
// are updated according to their won games.

// The functionality of "scoreRound" function could have been easily done in the previous function "displayRound", but was
// instead moved to a separate unique function to keep "displayRound" simple and according to its descriptive name.

function scoreRound(result) {
    if (result === "win") {
        playerScore += 1;
    } else if (result === "lose") {
        computerScore += 1;
    }
}

// Creation of function "endMatch".
// Contains an if ... else statement based on variables "playerScore" or "computerScore" reaching out a value of 3.
// The variable that first reaches a value of three will execute functions "hideContent()" and "openPopup()" which
// will hide the div with the main contents and display (make visible) a hidden div with the end-of-the-match contents.
// It will also trigger the update of global variable "endMatchResultsOutput", with a text declaring the winner and the 
// final score.

function endMatch() {
    if (playerScore === 3) {
        hideContent();
        openPopup();
        endMatchResultsOutput = `You won the game ${playerScore} to ${computerScore}!!!`;
    } else if (computerScore === 3) {
        hideContent();
        openPopup();
        endMatchResultsOutput = `Computer won the game ${computerScore} to ${playerScore}!!!`;
    }
}

// Creation of function "render", which takes all the global variables and uploads them to the DOM so the user can have
// live results while playing the game.

function render() {
    roundCounterOutput.textContent = `Round ${roundCounter}!`;
    roundResult.textContent = `${roundResultOutput}`;
    playerRoundScore.textContent = `${playerScore}`;
    computerRoundScore.textContent = `${computerScore}`;
    endMatchResults.textContent = `${endMatchResultsOutput}`;
}

// function initGame is created to re-declare the global variables as they should be in a pre-game state, with "roundCounter"
// being equal to 1, and the scores being equal to 0.

function initGame() {
    roundCounter = 0;
    roundResultOutput = "";
    playerScore = 0;
    computerScore = 0;
    endMatchResultsOutput = "";
}

// Below is an Event Listener attached to a button which will be the users option to restart the game once finished.
// It will execute functions "initGame" and "render" to update global variables to pre-game status and render them to the UI.
// It also executes functions "removePopup" and "displayContent" prior to those, so that clicking the button removes the class
// that makes the end-of-the-match results div (thus making it invisible again to the user), and it removes the class that
// makes the match-content div invisible (so that it becomes visible once again). Otherwise, the user would not see the 
// necessary UI to play the game.

playAgain.addEventListener("click", () => {
    removePopup();
    displayContent();
    initGame();
    render();
});


// Functions "getRandomInt" and "getComputerChoice" work together in order to create a random number from 1 to 3 and
// convert it to the string "rock", "paper", or "scissors", depending on the output.
// This string is stored in created variable "computerChoice", and will act as the computer's choice for each round.

function getComputerChoice() {

    const randomNumber = getRandomInt(1, 3);
    let computerChoice = null;

    if (randomNumber === 1) {
        computerChoice = "Rock";
    } else if (randomNumber === 2) {
        computerChoice = "Paper";
    } else if (randomNumber === 3) {
        computerChoice = "Scissors";
    }

    return computerChoice;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

// Functions openPopup and hideContent are created to change the visibility of the
// contents. The element with ID "popup" will be added the CSS class "popup", which
// will make it visible on the browser. The element with ID "main-div", will be added
// the CSS class "hide-div", and turn invisible instead.

function openPopup() {
    popup.classList.add("popup");
}

function hideContent() {
    hideDiv.classList.add("hide-div");
}

// Function removePopup is created to remove the class "popup" from the element with
// ID "popup". Function "displayContent" is created to the same use but isntead reveals
// the "main-div" once again.

function removePopup() {
    popup.classList.remove("popup");
}

function displayContent() {
    hideDiv.classList.remove("hide-div");
}
