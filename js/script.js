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

playRound(getPlayerChoice(), getComputerChoice());

// Plays one round, including win/loss cases
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Win, Rock beats Scissors!";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win, Scissors beats Paper!";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win, Paper beats Rock!";
    } else if (playerSelection === computerSelection) {
        return "You tied, try again!";
    } else {
        return `You lose, ${computerSelection} beats ${playerSelection}`;
    }
}