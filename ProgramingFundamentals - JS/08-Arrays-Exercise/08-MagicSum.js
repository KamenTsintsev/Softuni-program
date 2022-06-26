function solve(arr1, magicNum) {
    for (let i = 0; i < arr1.length; i++) {
        let currentNum = arr1[i];
        for (let j = i + 1; j < arr1.length; j++) {
            let nextNum = arr1[j];
            let sum = currentNum + nextNum
            if (sum === magicNum) {
                console.log(currentNum, nextNum);
            }
        }
    }
}
solve([1, 7, 6, 2, 19, 23], 8)