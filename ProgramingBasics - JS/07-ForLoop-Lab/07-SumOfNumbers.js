function sumOfNumbers(numberInput) {
    let number = "" + (numberInput);
    let res = 0;

    for (let i = 0; i < number.length; i++) {
        res += Number(number[i]);
    }
    console.log(`The sum of the digits is:${res}`);
}

sumOfNumbers("1234");