function printResult(num) {
    let halfNum = num / 2;
    let isPerfect = num => {
        let sum = 0;
        for (let i = 1; i <= halfNum; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }
        let result = sum === num ? true : false;
        return result;
    }
    if (isPerfect(num)) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

printResult(8128)