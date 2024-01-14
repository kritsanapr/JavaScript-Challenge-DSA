function calculator(number1, number2, operator) {
    return eval(`${number1} ${operator} ${number2}`);
}

module.exports = calculator;
