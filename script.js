const container = document.querySelector(".container");
const buttons = document.querySelector(".button-group");
const historyDisplay = document.querySelector(".history");
const currentDisplay = document.querySelector(".current");
const del = document.querySelector(".del");
const clear = document.querySelector(".clear");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

// global variables 

let currentValue = "";
let historyValue = "";
let firstNum = "";
let secondNum = "";
let operator = "";

function add(num1, num2) {
	const result = num1 + num2;
   currentValue = result;
	currentDisplay.innerText = currentValue;
	console.log(currentValue);
   console.log(currentDisplay);
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

   switch (operator) {
      case "+":
         add(num1, num2);
      break
      case "-":
         subtract(num1, num2);
      break
      case "*":
         multiply(num1, num2);
      break
      case "/":
         divide(num1, num2);
      break
   }
}

container.addEventListener("click", e => {
	if (e.target.classList.contains("number")) {
		currentValue += e.target.innerText;
		currentDisplay.innerText = currentValue;
		console.log(currentValue);
	}
});

container.addEventListener("click", e => {
	if (e.target.classList.contains("operator")) {
		firstNum = currentValue;
		operator = e.target.innerText;
		currentValue = "";
      currentDisplay.innerText = currentValue;
      historyValue = `${firstNum} ${operator}`;
		historyDisplay.innerText = historyValue;
	}
});

container.addEventListener("click", e => {
	if (e.target.classList.contains("equals")) {
		secondNum = value;
		history.innerText = `${firstNum} ${operator} ${secondNum} ${"="}`;
		operate(operator, parseInt(firstNum), parseInt(secondNum));
	}
});

del.addEventListener("click", () => {
   currentValue = currentValue.slice(0, -1);
   currentDisplay.innerText = currentValue;
   console.log(currentValue);
});

clear.addEventListener("click", () => {
   currentValue = "";
   currentDisplay.innerText = currentValue;
   historyDisplay.innerText = ""
});