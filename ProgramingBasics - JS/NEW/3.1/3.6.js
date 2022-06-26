function solve(arr1, arr2, arr3) {
    let n1 = Number(arr1);
    let n2 = Number(arr2);
    let operator = String(arr3);

    let even = String;

    if (n2 == 0 && (operator == "/" || operator == "%")) {
        console.log(`Cannot divide ${n1} by zero`);
        return;
    }

    let result = 0;

    if (operator == "+") {
        result = n1 + n2;

        if (result % 2 == 0) {
            even = "even";
        } else {
            even = "odd";
        }
    } else if (operator == "-") {
        result = n1 - n2;
        if (result % 2 == 0) {
            even = "even";
        } else {
            even = "odd";
        }
    } else if (operator == "*") {
        result = n1 * n2;
        if (result % 2 == 0) {
            even = "even";
        } else {
            even = "odd";
        }
    } else if (operator == "/") {
        result = n1 / n2;
    } else if (operator == "%") {
        result = n1 % n2;
    }

    if (operator == "/") {
        console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
    } else if (operator == "%") {
        console.log(`${n1} % ${n2} = ${result}`);
    } else {
        console.log(`${n1} ${operator} ${n2} = ${result} – ${even}`);
    }



}

solve(10, 0, "%")