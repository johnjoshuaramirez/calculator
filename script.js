const recentScreen = document.querySelector(".history");
const currentScreen = document.querySelector(".current");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");

let firstOperand = "";
let secondOperand = "";
let operator = "";
let resetScreen = false;

numberButtons.forEach(button => {
	button.addEventListener("click", () => {
		if (currentScreen.innerText === "0" || resetScreen) {
			reset();
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
		resetScreen = true;
		debug();
	});
});

equalsButton.addEventListener("click", result);

deleteButton.addEventListener("click", () => {
   currentScreen.innerText = currentScreen.innerText.toString().slice(0, -1);
});

clearButton.addEventListener("click", () => {
   currentScreen.innerText = "0";
   recentScreen.innerText = "";
   firstOperand = "";
   secondOperand = "";
   operator = "";
});

function result() {
	if (!operator || resetScreen) return;
	secondOperand = currentScreen.innerText;
	currentScreen.innerText = operate(operator, firstOperand, secondOperand);
	recentScreen.innerText = `${firstOperand} ${operator} ${secondOperand} =`;
	operator = "";
	debug();
}

function reset() {
	currentScreen.innerText = "";
	resetScreen = false;
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
	console.log(`let reset = ${resetScreen}`);
}
