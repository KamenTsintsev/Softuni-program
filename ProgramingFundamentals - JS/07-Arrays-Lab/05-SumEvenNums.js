function solve(arg1) {
    let sum = 0;
    for (i of arg1) {
        if (Number(i) % 2 === 0) {
            sum += Number(i);
        }

    }
    console.log(sum);
}
solve(['1', '2', '3', '4', '5', '6'])