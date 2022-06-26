function solve(arg1) {
    let word = arg1;

    let reverseWord = "";

    for (let k = 0; k < word.length; k++) {
        reverseWord = word[k] + reverseWord;
    }

    console.log(reverseWord);
}