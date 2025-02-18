const rules = document.querySelector(".rules");
const cross = document.querySelector(".cross");
let container = document.querySelector(".container");
let resultContainer = document.querySelector(".result_container");
let victoryContainer=document.querySelector(".victory-container");
let nextbtn=document.querySelector("#nextbtn");
let topSection=document.querySelector(".top_section");
let outercircle1=document.querySelector(".outer_circle1");
let outercircle2=document.querySelector(".outer_circle2");



const handOption = {
  paper: "./Paper.png",
  rock: "./Rock.png",
  scissor: "./Scissor.png",
};

let userScore = localStorage.getItem("userScore") ? parseInt(localStorage.getItem("userScore")) : 0;
let computerScore = localStorage.getItem("computerScore") ? parseInt(localStorage.getItem("computerScore")) : 0;

document.getElementById("current--1").textContent = userScore; 
document.getElementById("current--0").textContent = computerScore; 

function openrules() {
  rules.classList.remove("hidden");
  cross.classList.remove("hidden");
  
}

cross.addEventListener("click", () => {
  rules.classList.add("hidden");
  cross.classList.add("hidden");
  
});

const pickUserHand = (hands) => {
  console.log(hands);
  container.classList.add("hidden");

  resultContainer.classList.remove("hidden");

  document.getElementById("userPickImage").src = handOption[hands];

  let cphand = pickComputerHand();
  determineResult(hands, cphand);

};

const pickComputerHand = () => {
  let hand = ["rock", "paper", "scissor"];
  let cphand = hand[Math.floor(Math.random() * 3)];
  document.getElementById("computerPickImage").src = handOption[cphand];
  return cphand;
};

const determineResult = (userHand, cpHand) => {
  if (userHand === "paper" && cpHand === "scissor") {
    setDecision("YOU LOSE!");
    updateScore("computer");
  } else if (userHand === "paper" && cpHand === "rock") {
    setDecision("YOU WIN!");
    updateScore("user");
  } else if (userHand === "paper" && cpHand === "paper") {
    setDecision("It's a tie!");
  } else if (userHand === "rock" && cpHand === "scissor") {
    setDecision("YOU WIN!");
    updateScore("user");
  } else if (userHand === "rock" && cpHand === "paper") {
    setDecision("YOU LOSE!");
    updateScore("computer");
  } else if (userHand === "rock" && cpHand === "rock") {
    setDecision("It's a tie!");
  } else if (userHand === "scissor" && cpHand === "scissor") {
    setDecision("It's a tie!");
  } else if (userHand === "scissor" && cpHand === "rock") {
    setDecision("YOU LOSE!");
    updateScore("computer");
  } else if (userHand === "scissor" && cpHand === "paper") {
    setDecision("YOU WIN!");
    updateScore("user");
  }
};

const setDecision = (decision) => {
  const decisionElement = document.querySelector(".res_state h2");
  if (decision === "YOU WIN!") {
    decisionElement.innerHTML = `YOU WIN!<br><span style="font-size: 20px;">AGAINST PC</span>`;
  } else if (decision === "YOU LOSE!") {
    decisionElement.innerHTML = `YOU LOSE!<br><span style="font-size: 20px;">AGAINST PC</span>`;
  } else {
    decisionElement.innerText = decision; 
  }
};

const updateScore = (winner) => {
  if (winner === "user") {
    userScore++;
    document.getElementById("current--1").textContent = userScore;
    localStorage.setItem("userScore", userScore);
    nextbtn.classList.remove("hidden") ;
    outercircle1.classList.add("outer_circle");
    
    
  } else if (winner === "computer") {
    computerScore++;
    document.getElementById("current--0").textContent = computerScore;
    localStorage.setItem("computerScore", computerScore); 
    outercircle2.classList.add("outer_circle");
    
  }
};
function playagain(){
  container.classList.remove("hidden");
  nextbtn.classList.add("hidden") ;
  outercircle1.classList.remove("outer_circle");

  outercircle2.classList.remove("outer_circle");

  resultContainer.classList.add("hidden");
  topSection.classList.remove("hidden");
  victoryContainer.classList.add("hidden");
  resultContainer.classList.add("hidden");
}
function playagain2(){
  
  container.classList.remove("hidden");
  nextbtn.classList.add("hidden") ;

  resultContainer.classList.add("hidden");
  topSection.classList.remove("hidden");
  victoryContainer.classList.add("hidden");
  resultContainer.classList.add("hidden");
}
function openNext(){
  victoryContainer.classList.remove('hidden');
  container.classList.add("hidden");
  resultContainer.classList.add("hidden");
  topSection.classList.add("hidden");

}
