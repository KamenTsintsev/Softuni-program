function solve(arr1) {
    let num = Number(arr1);

    let fact = 1

    for (let i = 1; i <= num; i++) {
        fact *= i

    }
    console.log(fact);
}

solve(8)