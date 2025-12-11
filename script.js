let numberOne = 0;
let numberTwo = 0;
let operator = null;
let displayContent = null;

const display = document.getElementById('calculator-display')
const calculatorBtns = document.querySelectorAll('.calculator-btns')

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
    if (operator === "add") {
        return add(numberOne, numberTwo);
    } else if (operator === "subtract") {
        return subtract(numberOne, numberTwo);
    } else if (operator === "multiply") {
        return multiply(numberOne, numberTwo);
    } else if (operator === "divide") {
        return divide(numberOne, numberTwo);
    }
}

// function populateDisplay () {
//     display.textContent = "holaaa"
//     console.log("yes it was pressed");
// }

// calculatorBtns.addEventListener("click", populateDisplay())


calculatorBtns.forEach((button) => {
    button.addEventListener("click", () => {
    display.textContent += button.textContent;
    displayContent = button.textContent;
    console.log(displayContent);
    displayContent + 1;
    console.log("Now the number is " + displayContent)
    })
});
