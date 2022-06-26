function solve(arg1) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i of arg1) {
        if (Number(i) % 2 === 0) {
            sumEven += Number(i);
        } else {
            sumOdd += Number(i);
        }
    }

    console.log(sumEven - sumOdd);
}