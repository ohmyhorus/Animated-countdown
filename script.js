const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

let countdownTitle = "";
let countdownDate = "";

// set date input with today's date
const today = new Date().toISOString().split("T")[0];
dataEl.setAttribute("min", today);

//take values from form input
function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(countdownTitle, countdownDate);
}
//event listeners
countdownForm.addEventListener("submit", updateCountdown);
