// function calculator(number1, number2, operator) {
//     switch (operator) {
//         case "+":
//             return number1 + number2;
//         case "-":
//             return number1 - number2;
//         case "*":
//             return number1 * number2;
//         case "/":
//             return number1 / number2;
//         default:
//             throw new Error("Invalid operator");
//     }

//     // return eval(`${number1} ${operator} ${number2}`) || "Invalid operator";
// }

function calculator(number1, number2, operator) {
    if (operator === "+") {
        return number1 + number2;
    } else if (operator === "-") {
        return number1 - number2;
    } else if (operator === "*") {
        return number1 * number2;
    } else if (operator === "/") {
        return number1 / number2;
    } else {
        throw new Error("Invalid operator");
    }


    // return eval(`${number1} ${operator} ${number2}`) || "Invalid operator";
}

module.exports = calculator;
