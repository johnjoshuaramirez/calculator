const addition = "+";
const subtraction = "-";
const multiplication = "*";
const division = "/";

function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

function operate(operator, num1, num2) {
	if (operator === "+") {
		add(num1, num2);
	}
}

const buttons = document.querySelector(".button-group");
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operators");
const displayValue = display.innerText;


buttons.addEventListener("click", e => {
   console.log(e.target)
   if (e.target.classList.contains("number")) {
      display.innerText += e.target.innerText;
   };
})











// numbers.forEach(number => {
// 	number.addEventListener("click", () => {
// 		const numberValue = number.innerText.toString();
// 		display.innerText += numberValue;
// 	});
// });

// operators.forEach(operator => {
//    operator.addEventListener("click", () => {
//       if (operator.innerText === "+") {
//          operate( displayValue)
//       }
//    })
// })


