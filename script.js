const recentScreen = document.querySelector(".history");
const currentScreen = document.querySelector(".current");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");

// global variables

let recent = "";
let currentNumber = "";
let firstOperand = "";
let secondOperand = "";
let operator = "";

//
// deleteButton.addEventListener("click", deleteNumber);
// clearButton.addEventListener("click", clearNumber);

numberButtons.forEach(button =>
	button.addEventListener("click", () => appendNumber(button.innerText))
);

operatorButtons.forEach(button =>
	button.addEventListener("click", () => setOperator(button.innerText))
);

equalsButton.addEventListener("click", resolve);

function appendNumber(number) {
	currentNumber += number;
	currentScreen.innerText = currentNumber;
	firstOperand ? secondOperand = currentNumber : firstOperand;
}

function setOperator(symbol) {
	firstOperand += currentNumber;
	operator = symbol;
	currentNumber = "";
}

function resolve() {
   console.log(firstOperand, operator, secondOperand);
	currentNumber = operate(operator, firstOperand, secondOperand);
   currentScreen.innerText = currentNumber;
   firstOperand = currentNumber;
   secondOperand = "";
   currentNumber = "";
}

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
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
		case "-":
			return subtract(a, b);
		case "*":
			return multiply(a, b);
		case "/":
			return divide(a, b);
		default:
			return null;
	}
}
