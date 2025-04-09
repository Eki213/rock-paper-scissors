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