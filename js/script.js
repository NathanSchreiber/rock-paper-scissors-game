// Gets a random choice from computer
function getComputerChoice() {
    let arr = ["Rock", "Paper", "Scissors"];
    let choice = arr[Math.floor(Math.random() * arr.length)];
    changeCpuBorder(choice);
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
const currentScore = document.querySelector('.currentScore');
const allButtons = document.querySelectorAll('.allButtons');

// Makes borders not appear before choices are made
roundResults.style.display = "none";
finalResults.style.display = "none";
roundChoices.style.display = "none";

// Plays round with playerSelection as button clicked,
// then uses checkWinner to declare winner
rock.addEventListener('click', function () {
    allButtons.forEach((item) => {
        item.style.border = "";
    });
    rock.style.borderLeft = "5px solid blue";
    rock.style.borderTop = "5px solid blue";
    const playerSelection = "Rock";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    checkWinner(playerScore, computerScore);
});


paper.addEventListener('click', function () {
    allButtons.forEach((item) => {
        item.style.border = "";
    });
    paper.style.borderLeft = "5px solid blue";
    paper.style.borderTop = "5px solid blue";
    const playerSelection = "Paper";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    checkWinner(playerScore, computerScore);
});

scissors.addEventListener('click', function () {
    allButtons.forEach((item) => {
        item.style.border = "";
    });
    scissors.style.borderLeft = "5px solid blue";
    scissors.style.borderTop = "5px solid blue";
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
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        roundResults.textContent = "You win, Scissors beats Paper!";
        roundResults.style.display = "unset";
        win = true;
        tie = null;
        playerScore++;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        roundResults.textContent =  "You win, Paper beats Rock!";
        roundResults.style.display = "unset";
        win = true;
        tie = null;
        playerScore++;
    } else if (playerSelection === computerSelection) {
        roundResults.textContent =  "You tied, try again!";
        roundResults.style.display = "unset";
        tie = true;
        win = null;
    } else {
        roundResults.textContent =  `You lose, ${computerSelection} beats ${playerSelection}.`;
        roundResults.style.display = "unset";
        win = false;
        tie = null;
        computerScore++;
    }

    roundChoices.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection}`;
    currentScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    differentChoicesBorder(playerSelection, computerSelection);
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
    allButtons.forEach((item) => {
        item.style.border = "";
    });
};

reset.addEventListener('click', () => scoreReset());

//Checks to see who was the first to 5 points, then disables buttons
function checkWinner(playerScore, computerScore) {
    if (playerScore === 5) {
        finalResults.textContent = `You won ${playerScore} to ${computerScore}, good job!`;
        choiceButtons.style.pointerEvents = "none";
        finalResults.style.display = "unset";
        finalResults.style.color = "green";
    } else if (computerScore === 5) {
        finalResults.textContent = `You lost ${playerScore} to ${computerScore}, try again!`;
        choiceButtons.style.pointerEvents = "none";
        finalResults.style.display = "unset";
        finalResults.style.color = "red";
    }
};

// Changes border of button to reflect computer choice
function changeCpuBorder(choice) {
    if (choice === "Rock") {
        rock.style.borderRight = "5px solid red";
        rock.style.borderBottom = "5px solid red";
    } else if (choice === "Paper") {
        paper.style.borderRight = "5px solid red";
        paper.style.borderBottom = "5px solid red";
    } else if (choice === "Scissors") {
        scissors.style.borderRight = "5px solid red";
        scissors.style.borderBottom = "5px solid red";    };
};

// Changes borders to full borders when player's choice is different from the
// computer's choice
function differentChoicesBorder(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        rock.style.border = "5px solid blue";
        paper.style.border = "5px solid red";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        rock.style.border = "5px solid blue";
        scissors.style.border = "5px solid red";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        paper.style.border = "5px solid blue";
        rock.style.border = "5px solid red";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        paper.style.border = "5px solid blue";
        scissors.style.border = "5px solid red";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        scissors.style.border = "5px solid blue";
        rock.style.border = "5px solid red";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        scissors.style.border = "5px solid blue";
        paper.style.border = "5px solid red";
    }
};