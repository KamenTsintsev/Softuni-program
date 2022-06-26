function numberMod(num) {
    let numAsString = num.toString();
    let digitCount = numAsString.length;
    let average = 0;

    function averageChecker(num) {
        average = 0;
        for (let i = 0; i < digitCount; i++) {
            let currentDigit = Number(num[i])
            average += currentDigit;
        }
        average /= digitCount;
        return average;
    }
    averageChecker(numAsString);
    while (average < 5) {
        numAsString += "9";
        digitCount = numAsString.length;
        averageChecker(numAsString);
    }
    console.log(numAsString);
}

numberMod(1234)