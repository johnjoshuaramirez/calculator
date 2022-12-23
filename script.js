const recentScreen = document.querySelector(".history");
const currentScreen = document.querySelector(".current");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");

// global variables

let firstOperand = "";
let secondOperand = "";
let operator = "";
let reset = false;

numberButtons.forEach(button => {
	button.addEventListener("click", () => {
		if (currentScreen.innerText === "0" || reset) {
			resetCurrentScreen();
			currentScreen.innerText += button.innerText;
			debug();
		} else {
			currentScreen.innerText += button.innerText;
		}
	});
});

operatorButtons.forEach(button => {
	button.addEventListener("click", () => {
		if (operator) result();
      firstOperand = currentScreen.innerText;
		operator = button.innerText;
		recentScreen.innerText = `${firstOperand} ${operator}`;
		reset = true;
		debug();
	});
});

equalsButton.addEventListener("click", result);

function result() {
	if (!operator || reset) return;
	secondOperand = currentScreen.innerText;
	currentScreen.innerText = operate(operator, firstOperand, secondOperand);
	recentScreen.innerText = `${firstOperand} ${operator} ${secondOperand} =`;
	operator = "";
	debug();
}

function resetCurrentScreen() {
	currentScreen.innerText = "";
	reset = false;
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
	a = parseInt(a);
	b = parseInt(b);

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

function debug() {
	console.log(`let firstOperand = ${firstOperand}`);
	console.log(`let secondOperand = ${secondOperand}`);
	console.log(`let operator = ${operator}`);
	console.log(`let reset = ${reset}`);
}
