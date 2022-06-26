function replaceRepeatingChars(str) {

    let stringArr = str.split("");
    let stringArrL = stringArr.length;
    let uniqueChar = stringArr[0];
    let result = [];
    for (let i = 1; i <= stringArrL; i++) {
        let currChar = stringArr[i];
        if (uniqueChar !== currChar) {
            result.push(uniqueChar);
            uniqueChar = currChar;
        }
    }
    console.log(result.join(""));
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')