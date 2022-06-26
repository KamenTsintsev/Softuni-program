function journey(num1Input, num2Input, operatorInput) {
    let num1 = Number(num1Input);
    let num2 = Number(num2Input);
    let operator = operatorInput;
    let result = 0;
    let even = "";

    switch (operator) {
        case "+":
            result = num1 + num2;
            if (result % 2 === 0) {
                even = "even"
            } else {
                even = "odd"
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${even}`)
            break;
        case "-":
            result = num1 - num2;
            if (result % 2 === 0) {
                even = "even"
            } else {
                even = "odd"
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${even}`)
            break;
        case "*":
            result = num1 * num2;
            if (result % 2 === 0) {
                even = "even"
            } else {
                even = "odd"
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${even}`)
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
                console.log(`${num1} / ${num2} = ${result.toFixed(2)}`)
            } else {
                console.log(`Cannot divide ${num1} by zero`)
            }
            break;
        case "%":
            if (num2 !== 0) {
                result = num1 % num2;
                console.log(`${num1} % ${num2} = ${result}`)
            } else {
                console.log(`Cannot divide ${num1} by zero`)
            }
            break;
    }



}

journey("10",
"12",
"/");