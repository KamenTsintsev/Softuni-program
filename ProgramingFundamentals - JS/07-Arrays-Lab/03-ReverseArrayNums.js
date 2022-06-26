function solve(n, arg1) {
    let arr = [];
    for (let i = n; i > 0; i--) {
        arr.push(arg1[i - 1]);
    }
    console.log(arr.join(" "));
}

solve(3, [1, 2, 3, 4, 5, 6])