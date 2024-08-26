function multiply(num1, num2) {
    return num1 * num2;
}

function add(num1, num2) {
    const intNum1 = parseInt(num1, 10);
    const intNum2 = parseInt(num2, 10);

    return intNum1 + intNum2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

module.exports = {
    multiply,
    add,
    subtract,
    divide
}
