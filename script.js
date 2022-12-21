const container = document.querySelector(".container");
const buttons = document.querySelector(".button-group");
const history = document.querySelector(".history");
const current = document.querySelector(".current");
const del = document.querySelector(".del");
const clear = document.querySelector(".clear");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

// global variables 

let value = "";
let firstNum = "";
let secondNum = "";
let operator = "";

function add(num1, num2) {
	const result = parseInt(num1) - parseInt(num2);
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
	}
});

container.addEventListener("click", e => {
	if (e.target.classList.contains("equals")) {
		secondNum = value;
		history.innerText = `${firstNum} ${operator} ${secondNum} ${"="}`;
		operate(operator, firstNum, secondNum);
	}
});

del.addEventListener("click", () => {
   current.innerText = current.innerText.slice(0, -1);
   value = current.innerText;
});

clear.addEventListener("click", () => {
   current.innerText = "";
   history.innerText = ""
   value = current.innerText;
});

// change the value of result
// without pressing equal only operators clicked result is still changing
// if firstnum is null automatically set to zero
// remove percent in display
// refactor code

