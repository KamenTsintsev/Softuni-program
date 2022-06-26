function solve(arg1) {
    let num = String(arg1);

    let sum = 0;

    for (let i of num) {
        sum += Number(i)
    }
    console.log(sum);
}
solve(245678)