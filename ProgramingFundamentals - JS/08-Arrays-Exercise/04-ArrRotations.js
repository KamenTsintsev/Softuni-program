function solve(arr1, num) {
    for (let i = 0; i < num; i++) {
        arr1.push(arr1.shift(arr1[i]));
    }
    console.log(arr1.join(" "));
}

solve([51, 47, 32, 61, 21], 2)