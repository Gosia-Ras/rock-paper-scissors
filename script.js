const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const item = array[randomIndex];
  return item;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log("You've won this round!");
    playerScore++;
  } else {
    console.log("You lost this round!");
    computerScore++;
  }
}

function game() {
  while (playerScore < 3 && computerScore < 3) {
    let playerSelection = prompt("Pick rock, paper, or scissors");
    let computerSelection = getComputerChoice(choices);
    playRound(playerSelection, computerSelection);
    console.log(
      "Player score: " + playerScore + ", Computer score: " + computerScore
    );
  }

  if (playerScore === 3) {
    console.log("Congratulations! You win the game!");
  } else {
    console.log("Sorry, you lost the game. Better luck next time!");
  }
}

game();
