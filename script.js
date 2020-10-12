const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete]");
const pointButton = document.querySelector("[data-point]");
const screen = document.querySelector("[data-screen]");

let firstOperand = "";
let secondOperand = "";
let operator = null;
let shouldResetScreen = false;

numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener("click", setOperator)
);

equalsButton.addEventListener("click", getScore);
clearButton.addEventListener("click", clearScreen);
deleteButton.addEventListener("click", deleteNumber);
pointButton.addEventListener("click", setPoint);

function appendNumber(number) {
  if (screen.textContent === "0" || shouldResetScreen === true) resetScreen();
  screen.textContent += number;
}

function setOperator(operatorButton) {
  if (operator === null) {
    firstOperand = screen.textContent;
    operator = operatorButton.target.textContent;
  } else {
    operator = operatorButton.target.textContent;
    getScore();
  }
  shouldResetScreen = true;
}

function getScore() {
  secondOperand = screen.textContent;
  firstOperand = operate(operator, firstOperand, secondOperand);
  secondOperand = "";
  screen.textContent = firstOperand;
}

function clearScreen() {
  screen.textContent = "0";
  firstOperand = "";
  secondOperand = "";
  operator = null;
}

function resetScreen() {
  {
    screen.textContent = "";
    shouldResetScreen = false;
  }
}

function deleteNumber() {}

function setPoint() {
  if (screen.textContent.includes(".") || screen.textContent === "") return;
  screen.textContent += ".";
}

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "−":
      return substract(a, b);
    case "×":
      return multiply(a, b);
    case "÷":
      return divide(a, b);
    default:
      return;
  }
}
