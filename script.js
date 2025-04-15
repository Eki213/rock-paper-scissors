const selection = document.querySelector('.selection');
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
        console.log(`Tie. Both picked ${capitalize(humanChoice)}.`);
        return;
    }

    let playerWins =
        (humanChoice == 'scissors' && computerChoice == 'paper') ||
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'rock' && computerChoice == 'scissors');

    if (playerWins) {
        humanScore++;
        console.log(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`);
    }
}

selection.addEventListener('click', (e) => {
    const playerSelection = e.target.id;
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') playRound(playerSelection, getComputerChoice());
});

function capitalize(word) {
    return word.at(0).toUpperCase() + word.slice(1).toLowerCase();
}