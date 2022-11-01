const container = document.querySelector(".container");
const buttons = document.querySelector(".button-group");
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

let displayValue = "";
let firstNum = "";
let secondNum = "";
let operator = "";

function add(num1, num2) {
	const result = parseInt(num1) + parseInt(num2);
	console.log(result);
}

function subtract(num1, num2) {
	const result = parseInt(num1) - parseInt(num2);
	console.log(result);
}

function multiply(num1, num2) {
	const result = parseInt(num1) * parseInt(num2);
	console.log(result);
}

function divide(num1, num2) {
	const result = parseInt(num1) / parseInt(num2);
	console.log(result);
}

function operate(operator, num1, num2) {
	if (operator === "+") {
		add(num1, num2);
	} else if (operator === "-") {
		subtract(num1, num2);
	} else if (operator === "*") {
		multiply(num1, num2);
	} else if (operator === "/") {
		divide(num1, num2);
	}
}

container.addEventListener("click", e => {
	if (e.target.classList.contains("number")) {
		display.innerText += e.target.innerText;
		displayValue += e.target.innerText;
		console.log(displayValue);
	}
});

container.addEventListener("click", e => {
	if (e.target.classList.contains("operator")) {
		firstNum = displayValue;
		operator = e.target.innerText;
		displayValue = "";
		display.innerText = "";
		console.log("firstNum " + firstNum);
		console.log("secondNum " + secondNum);
		console.log("operator " + operator);
	}
});

container.addEventListener("click", e => {
	if (e.target.classList.contains("equals")) {
		secondNum = displayValue;
      console.log("secondNum " + secondNum);
		operate(operator, firstNum, secondNum);
	}
});
