function solve(arg1, arg2, arg3) {
    let n1 = arg1;
    let operator = arg2;
    let n2 = arg3;

    switch (operator) {
        case "+":
            console.log((n1 + n2).toFixed(2));
            break;
        case "-":
            console.log((n1 - n2).toFixed(2));
            break;
        case "*":
            console.log((n1 * n2).toFixed(2));
            break;
        case "/":
            console.log((n1 / n2).toFixed(2));
            break;
        default:
            break;
    }
}