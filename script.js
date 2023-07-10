const buttons = document.querySelectorAll(".number");
const display = document.querySelector(".calculate");
const Result = document.querySelector(".result");

let num1 = null;
let num2 = null;
let operator = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    display.textContent += button.textContent;
    handleNumber(button.textContent);
  });
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    display.textContent += button.textContent;
    handleOperator(button.textContent);
  });
});

function handleNumber(number) {
  
  if (number === ".") {
    // Decimal point clicked
    if (
      operator === null &&
      num1 !== null &&
      !Number.isInteger(parseFloat(num1))
    ) {
      // Decimal point clicked after num1 is a decimal, do nothing
      return;
    } else if (
      operator !== null &&
      num2 !== null &&
      !Number.isInteger(parseFloat(num2))
    ) {
      // Decimal point clicked after num2 is a decimal, do nothing
      return;
    }

    if (operator === null) {
      // No operator selected, update num1
      if (num1 === null) {
        num1 = "0.";
      } else if (!num1.toString().includes(".")) {
        num1 = num1.toString() + ".";
      }
    } else {
      // Operator selected, update num2
      if (num2 === null) {
        num2 = "0.";
      } else if (!num2.toString().includes(".")) {
        num2 = num2.toString() + ".";
      }
    }
  } else {
    if (operator === null) {
      // No operator selected, update num1
      num1 = parseFloat(num1 === null ? number : num1.toString() + number);
    } else {
      // Operator selected, update num2
      num2 = parseFloat(num2 === null ? number : num2.toString() + number);
    }
  }
}

    // Function to handle operator clicks
function handleOperator(op) {
        operator = op;
      }
  
      function calculate() {
        let result;
        num1 = parseFloat(num1); // Convert num1 to float
        num2 = parseFloat(num2); // Convert num2 to float
      
        if (num1 !== null && num2 !== null && operator !== null) {
          switch (operator) {
            case "+":
              result = num1 + num2;
              break;
            case "-":
              result = num1 - num2;
              break;
            case "x":
              result = num1 * num2;
              break;
            case "/":
              result = num1 / num2;
              break;
            default:
              display.textContent = "syntax error";
              return;
          }
      
          Result.textContent = result;
          num1 = result;
          num2 = null;
          operator = null;
          if (num2 === null && operator === null) {
            Result.textContent = num1;
          }
        }
      }



const equal = document.querySelector(".equal")
equal.addEventListener("click",calculate);

const clear = document.querySelector(".clear");
clear.addEventListener("click",()=>{
  display.innerHTML = "";
  Result.textContent = "cleared"
  num1 = null;
  num2 = null;

})
function deleteDigit() {
display.textContent = display.textContent.toString().slice(0, -1)
num1 = null
operator = null
Result.innerHTML = "";
if(display.textContent === ""){
  Result.textContent = "deleted"
}
}

const del = document.querySelector(".delete");
del.addEventListener("click",deleteDigit);

