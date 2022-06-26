function solve(arr1) {
    let qty = Number(arr1[0]);
    let minNum = Number(arr1[1]);

    for (let i = 2; i <= qty; i++) {
        let currNum = Number(arr1[i]);

        if (minNum > currNum) {
            minNum = currNum;
        }
    }

    console.log(minNum);
}

solve(["3", "-10", "20", "-30"]);