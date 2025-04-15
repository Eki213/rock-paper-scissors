const selection = document.querySelector('.selection');
const playerScore = document.querySelector('.player-score');
const cpuScore = document.querySelector('.computer-score');
const roundResult = document.querySelector('.round-result');
const matchResult = document.querySelector('.match-result');
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1) return "rock";
    if (choice == 2) return "paper";
    return "scissors";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        roundResult.textContent = `Tie. Both picked ${capitalize(humanChoice)}.`;
        return;
    }

    let playerWins =
        (humanChoice == 'scissors' && computerChoice == 'paper') ||
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'rock' && computerChoice == 'scissors');

    if (playerWins) {
        humanScore++;
        roundResult.textContent = `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`;
    } else {
        computerScore++;
        roundResult.textContent = `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`;
    }
}

selection.addEventListener('click', (e) => {
    if (humanScore === 5 || computerScore === 5) return; //ends Match

    const playerSelection = e.target.id;
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        playRound(playerSelection, getComputerChoice());
        showScores();
        announceMatchWinner(); //if necessary
    }
});

function showScores() {
    playerScore.textContent = `Player: ${humanScore}`;
    cpuScore.textContent = `CPU: ${computerScore}`;
}

function announceMatchWinner() {
    if (humanScore === 5) matchResult.textContent = 'You won the Match!';
    if (computerScore === 5) matchResult.textContent = 'You lost the Match!';
}

function capitalize(word) {
    return word.at(0).toUpperCase() + word.slice(1).toLowerCase();
}