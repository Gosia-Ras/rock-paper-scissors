const choices = ["rock", "paper", "scissors"];

function getComputerChoice(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const item = array[randomIndex];
  return item;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice(choices);

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("Sorry, you lost!");
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You've won!");
  }
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
  }
}

playRound(playerSelection, computerSelection);
