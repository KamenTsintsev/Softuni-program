function solve(arg1, arg2) {
    let num = Number(arg1);
    let precision = arg2;

    if (precision > 15) {
        precision = 15;
    }

    let result = num.toFixed(precision);

    console.log(parseFloat(result));
}