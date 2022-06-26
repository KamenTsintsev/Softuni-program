function solve(arg1) {
    let string = String(arg1);
    let sum = 0

    for (let i of string) {
        sum += Number(i);
    }

    let result = String(sum).includes("9")

    console.log(result
        ? `${string} Amazing? True`
        : `${string} Amazing? False`);
}

solve(991)