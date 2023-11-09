const choices = ["rock", "paper", "scissors"];

function getComputerChoice(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const item = array[randomIndex];
  return item;
}

let playerSelection = prompt("Pick rock, paper or scissors");
let computerSelection = getComputerChoice(choices);

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log("You've won!");
  } else {
    console.log("Sorry, you lost!");
  }
}

function game() {
  playRound(playerSelection, computerSelection);
}

game();
