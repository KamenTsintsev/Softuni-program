function primeNonPrime(input) {
    let index = 0;
    let firstNum = input[index];
    index++;

    let sumPrime = 0;
    let sumNonPrime = 0;

    while (firstNum !== "stop") {
        firstNum = Number(input[index]);
        let sumDivide = 0;

        if (firstNumber < 0) {
            console.log("Number is negative.");
            firstNum = input[index];
            index++;
            continue;
        } else {
            for (let i = 1; i <= firstNumber; i++) {
                if (firstNumber % i === 0) {
                    sumDivide += i;
                }
            }
        }

        if (sumDivide === 1 + firstNumber) {
            sumPrime += firstNumber;
        } else {
            sumNonPrime += firstNumber;
        }

        firstNum = input[index];
        index++;

        if (firstNum == "stop") {
            break;
        }
    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}