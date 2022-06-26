function maxNumber(NumInput) {
    let index = 0;
    let maxNum = Number(NumInput[index]);
    index++;

    while (NumInput[index] !== "Stop") {
        let currentNum = Number(NumInput[index])

        if (maxNum < currentNum) {
            maxNum = currentNum;
        }
        index++;
    }
    console.log(maxNum);
}

maxNumber(["-45", "-20", "-99", "-7", "Stop"]);