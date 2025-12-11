const display = document.getElementById('calculator-display')
const calculatorBtns = document.querySelectorAll('.calculator-btns')
const operatorBtns = document.querySelectorAll('.calculator-operator-btns')

let numberOne = 0;
let numberTwo = 0;
let operator = "";
let displayContent = "";

function add (numA, numB) {
    const result = numA + numB;
    console.log(result);
    return result;
}

function subtract (numA, numB) {
    const result = numA - numB;
    console.log(result);
    return result;
}

function multiply (numA, numB) {
    const result = numA * numB;
    console.log(result);
    return result;
}

function divide (numA, numB) {
    const result = numA / numB;
    console.log(result);
    return result;
}

function operate (operator, numberOne, numberTwo) {
    if (operator === "+") {
        return add(numberOne, numberTwo);
    } else if (operator === "-") {
        return subtract(numberOne, numberTwo);
    } else if (operator === "X") {
        return multiply(numberOne, numberTwo);
    } else if (operator === "÷") {
        return divide(numberOne, numberTwo);
    }
}

calculatorBtns.forEach((button) => {
    button.addEventListener("click", () => {
    display.textContent += button.textContent;
    displayContent += button.textContent;
    /* numberOne = displayContent;
    displayContent = "";*/
    //console.log(displayContent); 
    })
});

operatorBtns.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.textContent !== "=" && button.textContent !== "C") {
            numberOne = parseFloat(displayContent);
            operator = button.textContent;
            display.textContent = "";
            displayContent = "";
        } else if (button.textContent === "=") {
            numberTwo = parseFloat(displayContent);
            const result = operate(operator, numberOne, numberTwo);
            display.textContent = result;
            displayContent = result;
        } else {
            numberOne = 0;
            numberTwo = 0;
            operator = "";
            displayContent = "";
            display.textContent = "";
        }
    })
})


