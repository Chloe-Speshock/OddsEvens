// TODO: this file! :)

const form = document.querySelector("form");
const numberBank = document.querySelector("#numberBank");
const sortOneButton = document.querySelector("#sortOne");
const sortAllButton = document.querySelector("#sortAll");

const state = {
  numbers: [],
  odds: [],
  evens: [],
};
//These are the event listeners
form.addEventListener("submit", addNumber);
render();
sortOneButton.addEventListener("click", sortOne);
sortAllButton.addEventListener("click", sortAll);

function addNumber(event) {
  event.preventDefault();

  const number = event.target.number.value;

  state.numbers.push(number);
  event.target.number.value = "";
  render();
}
function render() {
  document.querySelector("#numberBank output").textContent =
    state.numbers.join(", ");
  document.querySelector("#odds output").textContent = state.odds.join(", ");
  document.querySelector("#evens output").textContent = state.evens.join(", ");
}
function sortOne() {
  const number = state.numbers.shift();
  if (number % 2 === 0) {
    state.evens.push(number);
  } else {
    state.odds.push(number);
  }
  render();
}
function sortAll() {
  state.numbers.forEach((number) => {
    if (number % 2 === 0) {
      state.evens.push(number);
    } else {
      state.odds.push(number);
    }
  });
  state.numbers = [];

  render();
}
