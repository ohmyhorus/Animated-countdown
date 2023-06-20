const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

const countdownEl = document.getElementById("countdown");
const countdownTitle = document.getElementById("countdown-title");
const countdownBtn = document.getElementById("countdown-button");
const timeElements = document.querySelectorAll("span");

let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;
// set date input with today's date
const today = new Date().toISOString().split("T")[0];
dataEl.setAttribute("min", today);

//populate countdown / complete ui
function updateDOM() {
  const now = new Date().getTime();
  const distance = countdownValue - now;
  console.log("distance", distance);
}
//take values from form input
function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(countdownTitle, countdownDate);
  //get number version of current date, updateDOM
  countdownValue = new Date(countdownDate).getTime();
  console.log("countdown value:", countdownValue);
  updateDOM();
}
//event listeners
countdownForm.addEventListener("submit", updateCountdown);
