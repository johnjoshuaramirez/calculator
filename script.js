const container = document.querySelector(".container");
const buttons = document.querySelector(".button-group");
const history = document.querySelector(".history");
const current = document.querySelector(".current");
const del = document.querySelector(".del");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

let value = "";
let firstNum = "";
let secondNum = "";
let operator = "";

function add(num1, num2) {
	const result = parseInt(num1) + parseInt(num2);
	current.innerText = result;
	console.log(current);
}

function subtract(num1, num2) {
	const result = parseInt(num1) - parseInt(num2);
	current.innerText = result;
	console.log(current);
}

function multiply(num1, num2) {
	const result = parseInt(num1) * parseInt(num2);
	current.innerText = result;
	console.log(current);
}

function divide(num1, num2) {
	const result = parseInt(num1) / parseInt(num2);
	current.innerText = result;
	console.log(current);
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
		value += e.target.innerText;
		current.innerText = value;
		console.log(value);
	}
});

container.addEventListener("click", e => {
	if (e.target.classList.contains("operator")) {
		firstNum = value;
		operator = e.target.innerText;
		value = "";
		history.innerText = `${firstNum} ${operator}`;
		console.log("firstNum " + firstNum);
		console.log("displayValue " + value);
	}
});

container.addEventListener("click", e => {
	if (e.target.classList.contains("equals")) {
		secondNum = value;
		history.innerText = `${firstNum} ${operator} ${secondNum} ${"="}`;

		console.log("secondNum " + secondNum);
		operate(operator, firstNum, secondNum);
	}
});

del.addEventListener("click", () => {
   const current = document.querySelector(".current");
   current.innerText = current.innerText.slice(0, -1);
   value = current.innerText;
   console.log(value);
});
