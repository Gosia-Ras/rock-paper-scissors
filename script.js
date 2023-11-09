const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const gameResultsDisplay = document.getElementById("gameResults");
const buttons = document.querySelectorAll(".choice");
const resetButton = document.getElementById("resetButton");

playerScoreDisplay.textContent = `Player score: ${playerScore}`;
computerScoreDisplay.textContent = `Computer score: ${computerScore}`;

function getComputerChoice(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const item = array[randomIndex];
  return item;
}

function playRound(playerSelection, computerSelection) {
  if (playerScore === 3) {
    gameResultsDisplay.textContent = "Congratulations! You win the game!";
    disableButtons();
    return;
  } else if (computerScore === 3) {
    gameResultsDisplay.textContent =
      "Sorry, you lost the game. Better luck next time!";
    disableButtons();
    return;
  }

  if (playerSelection === computerSelection) {
    gameResultsDisplay.textContent = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    gameResultsDisplay.textContent = "You've won this round!";
    playerScore++;
  } else {
    gameResultsDisplay.textContent = "You lost this round!";
    computerScore++;
  }
  playerScoreDisplay.textContent = `Player score: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
}

function disableButtons() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function enableButtons() {
  buttons.forEach((button) => {
    button.disabled = false;
  });
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = `Player score: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
  gameResultsDisplay.textContent = "";
  enableButtons();
}

function game() {
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const playerSelection = button.value;
      const computerSelection = getComputerChoice(choices);
      playRound(playerSelection, computerSelection);
    });
  });

  resetButton.addEventListener("click", resetGame);
}

game();
