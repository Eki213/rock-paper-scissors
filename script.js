// returns randomly “rock”, “paper” or “scissors”.
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1) return "rock";
    if (choice == 2) return "paper";
    return "scissors";
}

// returns user's choice (“rock”, “paper” or “scissors”).
function getHumanChoice() {
    return prompt('Rock, Paper or Scissors?').toLowerCase();
}

// Plays a game of 5 rounds and displays the winner.
function playGame() {
    //variables to keep track of the players' score.
    let humanScore = 0;
    let computerScore = 0;

    // Plays a single round and logs the result
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

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log('You won the game!');
    } else if (humanScore < computerScore) {
        console.log('You lost the game!');
    } else {
        console.log("It's a tie game!");
    }
}
// capitalize a word
function capitalize(word) {
    return word.at(0).toUpperCase() + word.slice(1).toLowerCase();
}