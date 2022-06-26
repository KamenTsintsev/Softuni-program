function minNumbers(arrInput) {
    let numCount = Number(arrInput[0]);
    let minNumber = Number(arrInput[1]);

    for (let i = 2; i <= numCount; i++) {
        let currentNumber = Number(arrInput[i]);

        if (minNumber > currentNumber) {
            minNumber = currentNumber;
        }
    }

    console.log(minNumber);
}

minNumbers(["4", "45", "-20", "7", "99"]);
