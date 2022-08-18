// Gets a random choice from computer
function getComputerChoice() {
    let arr = ["Rock", "Paper", "Scissors"];
    let choice = arr[Math.floor(Math.random() * arr.length)];
    return choice;
}

// Gets the player's choice via prompt
function getPlayerChoice() {
    let choice = prompt("What's your choice?");
    let str = choice.toLowerCase();
    let output = choice.charAt(0).toUpperCase() + str.slice(1);
    return output;
}

// Gets buttons and adds them to variables
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const reset = document.querySelector('#reset');
const roundChoices = document.querySelector('.roundChoices');

// Gets divs and sets them to variables
const roundResults = document.querySelector('.roundResults');
const finalResults = document.querySelector('.finalResults');
const choiceButtons = document.querySelector('.choiceButtons');
const currentScore = document.querySelector(".currentScore");

// Makes borders not appear before choices are made
roundResults.style.display = "none";
finalResults.style.display = "none"

// Plays round with playerSelection as button clicked,
// then uses checkWinner to declare winner
rock.addEventListener('click', function () {
    const playerSelection = "Rock";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    checkWinner(playerScore, computerScore);
});


paper.addEventListener('click', function () {
    const playerSelection = "Paper";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    checkWinner(playerScore, computerScore);
});

scissors.addEventListener('click', function () {
    const playerSelection = "Scissors";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    checkWinner(playerScore, computerScore);
});


let playerScore = 0;
let computerScore = 0;

// Plays one round, including win/loss cases
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        roundResults.textContent = "You win, Rock beats Scissors!";
        roundResults.style.display = "unset";
        win = true;
        tie = null;
        playerScore++;
        // return roundResult;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        roundResults.textContent = "You win, Scissors beats Paper!";
        roundResults.style.display = "unset";
        win = true;
        tie = null;
        playerScore++;
        // return roundResult;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        roundResults.textContent =  "You win, Paper beats Rock!";
        roundResults.style.display = "unset";
        win = true;
        tie = null;
        playerScore++;
        // return roundResult;
    } else if (playerSelection === computerSelection) {
        roundResults.textContent =  "You tied, try again!";
        roundResults.style.display = "unset";
        tie = true;
        win = null;
        // return roundResult;
    } else {
        roundResults.textContent =  `You lose, ${computerSelection} beats ${playerSelection}.`;
        roundResults.style.display = "unset";
        win = false;
        tie = null;
        computerScore++;
    }

    roundChoices.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection}`;
    currentScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
};

// Resets game and page to default
function scoreReset () {
    playerScore = 0;
    computerScore = 0;
    roundChoices.textContent = "";
    roundResults.style.display = "none";
    finalResults.style.display = "none";
    currentScore.textContent = "Player: 0 Computer: 0";
    choiceButtons.style.pointerEvents = "auto";
};

reset.addEventListener('click', () => scoreReset());

//Checks to see who was the first to 5 points, then disables buttons
function checkWinner(playerScore, computerScore) {
    if (playerScore === 5) {
        finalResults.textContent = `You won ${playerScore} to ${computerScore}, good job!`;
        choiceButtons.style.pointerEvents = "none";
        finalResults.style.display = "unset";
    } else if (computerScore === 5) {
        finalResults.textContent = `You lost ${playerScore} to ${computerScore}, try again!`;
        choiceButtons.style.pointerEvents = "none";
        finalResults.style.display = "unset";
    }
};