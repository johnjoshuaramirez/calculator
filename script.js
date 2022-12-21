const container = document.querySelector(".container");
const buttons = document.querySelector(".button-group");
const historyDisplay = document.querySelector(".history");
const currentDisplay = document.querySelector(".current");
const del = document.querySelector(".del");
const clear = document.querySelector(".clear");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

// global variables

let recentNumber = "";
let currentNumber = "";
let operator = "";
let result = "";

function add(num1, num2) {
	result = num1 + num2;
	currentDisplay.innerText = result;
}

function subtract(num1, num2) {
	result = num1 - num2;
	currentDisplay.innerText = result;
}

function multiply(num1, num2) {
	result = num1 * num2;
	currentDisplay.innerText = result;
}

function divide(num1, num2) {
	result = num1 / num2;
	currentDisplay.innerText = result;
}

function operate(operator, num1, num2) {
	switch (operator) {
		case "+":
			add(num1, num2);
			break;
		case "-":
			subtract(num1, num2);
			break;
		case "*":
			multiply(num1, num2);
			break;
		case "/":
			divide(num1, num2);
			break;
	}
}

container.addEventListener("click", e => {
	if (e.target.classList.contains("number")) {
		currentNumber += e.target.innerText;
		currentDisplay.innerText = currentNumber;
	}
});

container.addEventListener("click", e => {
	if (e.target.classList.contains("operator")) {
			operator = e.target.innerText;
         recentNumber = currentNumber;
         currentNumber = "";
			historyDisplay.innerText = `${recentNumber} ${operator}`;
	}
});

container.addEventListener("click", e => {
	if (e.target.classList.contains("equals")) {
		historyDisplay.innerText = `${recentNumber} ${operator} ${currentNumber} ${"="}`;
		operate(operator, parseInt(recentNumber), parseInt(currentNumber));
	}
});

del.addEventListener("click", () => {
	currentNumber = current.slice(0, -1);
	currentDisplay.innerText = current;
});

clear.addEventListener("click", () => {
	currentNumber = "";
	currentDisplay.innerText = "";
	historyDisplay.innerText = "";
});
