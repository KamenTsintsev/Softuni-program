function isNegative(num1, num2, num3) {
    let negativeCounter = 0;
    if (num1 < 0) {
        negativeCounter++;
    }
    if (num2 < 0) {
        negativeCounter++;
    }
    if (num3 < 0) {
        negativeCounter++;
    }

    if (negativeCounter % 2 === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }

}

isNegative(-12, 5, 15)