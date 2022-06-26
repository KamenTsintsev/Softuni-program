function divWoRemainder(numInput) {
    let numCount = Number(numInput[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 1; i <= numCount; i++) {
        let currentNumber = numInput[i];

        if (currentNumber % 2 === 0) {
            p1++;
        }
        if (currentNumber % 3 === 0) {
            p2++;
        }
        if (currentNumber % 4 === 0) {
            p3++;
        }
    }

    console.log(`${(p1 / numCount * 100).toFixed(2)}%`);
    console.log(`${(p2 / numCount * 100).toFixed(2)}%`);
    console.log(`${(p3 / numCount * 100).toFixed(2)}%`);

}

divWoRemainder(["3", "3", "6", "9"]);