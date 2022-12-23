const recentScreen = document.querySelector(".history");
const currentScreen = document.querySelector(".current");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const periodButton = document.querySelector(".period");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");

let firstOperand = "";
let secondOperand = "";
let operator = "";
let resetScreen = false;

periodButton.addEventListener("click", () => {
	if (resetScreen) reset();

	if (currentScreen.innerText === "") currentScreen.innerText = "0";

	if (currentScreen.innerText.includes(".")) return;

	currentScreen.innerText += ".";
});

numberButtons.forEach(button => {
	button.addEventListener("click", () => {
		if (currentScreen.innerText === "0" || resetScreen) reset();
		currentScreen.innerText += button.innerText;
	});
});

operatorButtons.forEach(button => {
	button.addEventListener("click", () => {
		if (operator) result();
		firstOperand = currentScreen.innerText;
		operator = button.innerText;
		recentScreen.innerText = `${firstOperand} ${operator}`;
		resetScreen = true;
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
	a = parseFloat(a);
	b = parseFloat(b);

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

function result() {
	if (!operator || resetScreen) return;

   if (operator === "/" && currentScreen.innerText === "0") {
      alert(`Error: ${firstOperand} cannot be divided by 0`);
      recentScreen.innerText = `${firstOperand} ${operator}`;
      return
   }

	secondOperand = currentScreen.innerText;
	currentScreen.innerText = roundNumber(operate(operator, firstOperand, secondOperand));
	recentScreen.innerText = `${firstOperand} ${operator} ${secondOperand} =`;
	operator = "";
}

function roundNumber(number) {
   return Math.round(number * 1000) / 1000;
}
