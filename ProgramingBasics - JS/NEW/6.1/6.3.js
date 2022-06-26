function solve(arr1) {
    let index = 0;
    let command = arr1[index];

    let primeSum = 0;
    let nonPrimeSum = 0;

    while (command !== "stop") {
        let currentNum = Number(command);

        if (currentNum < 0) {
            console.log(`Number is negative.`);
            index++;
            command = arr1[index];
            continue;
        }
        let isPrime = true;

        if (currentNum === 1) {
            isPrime = false;
        } else {
            for (let i = currentNum; i >= 2; i--) {
                if (currentNum % i == 0 && i !== currentNum) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            primeSum += currentNum;
        } else {
            nonPrimeSum += currentNum;
        }
        index++;
        command = arr1[index];
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);

}

solve(["30",
    "83",
    "33",
    "-1",
    -2,
    15,
    17,
    -31,
    "20",
    "stop"])
