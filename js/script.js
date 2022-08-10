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
rock.value = "Rock";

const paper = document.querySelector('#paper');
paper.value = "Paper";

const scissors = document.querySelector('#scissors');
scissors.value = "Scissors";

// Plays round with playerSelection as button clicked
rock.addEventListener('click', function () {
    const player = rock.value;
    roundResult = playRound(player, getComputerChoice());
    
});

paper.addEventListener('click', function () {
    const player = paper.value;
    roundResult = playRound(player, getComputerChoice());
    
});

scissors.addEventListener('click', function () {
    const player = scissors.value;
    roundResult = playRound(player, getComputerChoice());
    
});

// Plays one round, including win/loss cases
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        roundResult = "You Win, Rock beats Scissors!";
        win = true;
        tie = null;
        return roundResult;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        roundResult = "You win, Scissors beats Paper!";
        win = true;
        tie = null;
        return roundResult;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        roundResult =  "You win, Paper beats Rock!";
        win = true;
        tie = null;
        return roundResult;
    } else if (playerSelection === computerSelection) {
        roundResult =  "You tied, try again!";
        tie = true;
        win = null;
        return roundResult;
    } else {
        roundResult =  `You lose, ${computerSelection} beats ${playerSelection}.`;
        win = false;
        tie = null;
        return roundResult;
    }
}