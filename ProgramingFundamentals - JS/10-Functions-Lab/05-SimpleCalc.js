function simpleCalc(n1, n2, operator) {

    switch (operator) {
        case "multiply":
            console.log(multiply(n1, n2));
            break;
        case "divide":
            console.log(divide(n1, n2));
            break;
        case "add":
            console.log(add(n1, n2));
            break;
        case "subtract":
            console.log(subtract(n1, n2));
            break;
    }
    function multiply(num1, num2) {
        return num1 * num2;
    }
    function divide(num1, num2) {
        return num1 / num2;
    }
    function add(num1, num2) {
        return num1 + num2;
    }
    function subtract(num1, num2) {
        return num1 - num2;
    }
}

simpleCalc(5, 5, "multiply");
simpleCalc(40, 8, "divide");
simpleCalc(12, 19, "add");
simpleCalc(50, 13, "subtract");