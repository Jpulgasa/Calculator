let numberOne = 0;
let numberTwo = 0;
let operator = null;


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