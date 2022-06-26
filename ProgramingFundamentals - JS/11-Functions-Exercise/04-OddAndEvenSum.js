function printResult(input) {
    let inputAsString = input.toString();
    let inputL = inputAsString.length;

    let takeOddSum = numAsString => {
        let oddSum = 0
        for (let i = 0; i < inputL; i++) {
            let currentElement = Number(numAsString[i]);
            if (currentElement % 2 === 1) {
                oddSum += Number(currentElement);
            } else {
                continue;
            }
        }
        return oddSum;
    };
    let takeEvenSum = function (numAsString) {
        let evenSum = 0
        for (let i = 0; i < inputL; i++) {
            let currentElement = Number(numAsString[i]);
            if (currentElement % 2 === 0) {
                evenSum += currentElement;
            } else {
                continue;
            }
        }
        return evenSum;
    }
    console.log(`Odd sum = ${takeOddSum(inputAsString)}, Even sum = ${takeEvenSum(inputAsString)}`);
}

printResult(3495892137259234)