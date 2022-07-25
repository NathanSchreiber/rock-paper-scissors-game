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

// Plays a 5 round game logging the winner and score
function game() {
    
    let player = 0;
    let computer = 0;

    for (let i = 0; i < 5; i++) {
        playRound(getPlayerChoice(), getComputerChoice());
        if (win === true) {
            player += 1;
        } else if (tie === true) {
            player += 0;
        } else if (win === false) {
            computer += 1;
        }
        console.log(roundResult);
    }

    if (player > computer) {
        console.log(`You won ${player} to ${computer}!`);
    } else if (computer > player) {
        console.log (`You lost ${computer} to ${player}. Try again!`);
    } else {
        console.log (`You tied ${player} to ${computer}. Try again!`);
    }
}