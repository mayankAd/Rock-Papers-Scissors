const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");

const playerImage = document.querySelector("#img-1");
const computerImage = document.querySelector("#img-2");
const resultImage = document.querySelector("#img-3");


const choiceBtns = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
    playerImage.src = setImage1();
    computerImage.src = setImage2();
  })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
  }
}

function checkWinner() {
  if (player == computer) {
    return "Draw!";
  } else if (computer == "ROCK") {
    return player == "PAPER" ? "YOU WIN!" : "YOU LOSE!";
  } else if (computer == "PAPER") {
    return player == "SCISSORS" ? "YOU WIN!" : "YOU LOSE!";
  }
  else if (computer == "SCISSORS") {
    return player == "ROCK" ? "YOU WIN!" : "YOU LOSE!";
}
}


function setImage1(){
    if(player == "ROCK"){
    return "rock.jpg"; }
else if(player == "PAPER"){
    return "paper.png";}
else{
return "scissors.jpg";
}
}

function setImage2(){
    if(computer == "ROCK"){
    return "rock.jpg"; }
else if(computer == "PAPER"){
    return "paper.png";}
else{
return "scissors.jpg";
}
}