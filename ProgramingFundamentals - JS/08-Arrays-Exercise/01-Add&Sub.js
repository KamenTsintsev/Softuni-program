function solve(arr1) {
    let sumOriginal = 0;
    let sumModified = 0;
    for (let i = 0; i < arr1.length; i++) {
        let currentNum = arr1[i]
        sumOriginal += currentNum
        if (currentNum % 2 === 0) {
            currentNum += i;
            arr1[i] = currentNum
            sumModified += currentNum;
        } else {
            currentNum -= i;
            arr1[i] = currentNum
            sumModified += currentNum;
        }
    }

    console.log(arr1);
    console.log(sumOriginal);
    console.log(sumModified);


}

solve([5, 15, 23, 56, 35])