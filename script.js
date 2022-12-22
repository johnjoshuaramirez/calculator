const container = document.querySelector(".container");
const buttons = document.querySelector(".button-group");
const recentScreen = document.querySelector(".history");
const currentScreen = document.querySelector(".current");
const del = document.querySelector(".del");
const clear = document.querySelector(".clear");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");

// global variables

let firstOperand = "";
let secondOperand = "";
let operator = "";
let currentNumber = "";
let result = "";

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

numbers.forEach(number => {
	number.addEventListener("click", e => {
		currentNumber += e.target.innerText;
		currentScreen.innerText = currentNumber;
	});
});

operations.forEach(operation => {
	operation.addEventListener("click", e => {
		if (operator) {
			secondOperand = currentScreen.innerText;
			result = operate(operator, parseInt(firstOperand), parseInt(secondOperand));
			operator = operation.innerText;
			currentScreen.innerText = result;
			firstOperand = result;
			currentNumber = "";
			console.log(firstOperand);
			console.log(secondOperand);
			console.log(operator);
		} else if (!operator) {
			firstOperand = currentScreen.innerText;
			operator = operation.innerText;
			currentNumber = "";
		}
	});
});

equals.addEventListener("click", () => {
	secondOperand = currentScreen.innerText;
	result = operate(operator, parseInt(firstOperand), parseInt(secondOperand));
	currentNumber = result;
	currentScreen.innerText = currentNumber;
});

del.addEventListener("click", () => {});

clear.addEventListener("click", () => {});
