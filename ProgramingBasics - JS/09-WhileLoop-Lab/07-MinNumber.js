function minNumber(NumInput) {
    let index = 0;
    let minNum = Number(NumInput[index]);
    index++;

    while (NumInput[index] !== "Stop") {
        let currentNum = Number(NumInput[index])

        if (minNum > currentNum) {
            minNum = currentNum;
        }
        index++;
    }
    console.log(minNum);
}

minNumber(["-45", "-20", "-99", "-7", "Stop"]);