function palindromeNumbers(input) {
    let arrayOfNumbers = input;
    let arrayL = arrayOfNumbers.length
    let isPalindrome = num => {
        let startNum = num;
        let reverseNum = Number(startNum.toString().split("").reverse().join(""));
        if (startNum === reverseNum) {
            return 'true';
        } else {
            return 'false';
        }
    }

    for (let i = 0; i < arrayL; i++) {
        let currentNumber = arrayOfNumbers[i];
        console.log(isPalindrome(currentNumber));
    }
}
palindromeNumbers([123, 323, 421, 121])