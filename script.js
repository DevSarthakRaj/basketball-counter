let homeScore = 0;

let guestScore = 0;

function homeAddOne() {
  homeScore += 1;
  document.getElementById("home-score").textContent = homeScore;
}

function homeAddTwo() {
  homeScore += 2;
  document.getElementById("home-score").textContent = homeScore;
}

function homeAddThree() {
  homeScore += 3;
  document.getElementById("home-score").textContent = homeScore;
}

function guestAddOne() {
  guestScore += 1;
  document.getElementById("guest-score").textContent = guestScore;
}

function guestAddTwo() {
  guestScore += 2;
  document.getElementById("guest-score").textContent = guestScore;
}

function guestAddThree() {
  guestScore += 3;
  document.getElementById("guest-score").textContent = guestScore;
}

let screenHomeScore = document.getElementById("home-score");
let screenGuestScore = document.getElementById("guest-score");

function reset() {
  homeScore = 0;
  guestScore = 0;
  screenGuestScore.textContent = guestScore;
  screenHomeScore.textContent = homeScore;
}
