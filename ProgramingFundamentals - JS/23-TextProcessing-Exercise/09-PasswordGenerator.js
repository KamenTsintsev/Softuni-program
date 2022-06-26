function passwordGenerator(input) {
    let [str1, str2, keyWord] = input;
    let combinedStrArr = str1.concat(str2).split("");
    let strL = combinedStrArr.length;
    let keyWordArr = keyWord.split("");

    for (let i = 0; i < strL; i++) {
        let currentChar = combinedStrArr[i]
        if (isVowel(currentChar)) {
            combinedStrArr[i] = keyWordArr.shift().toUpperCase();
        }
        if (keyWordArr.length === 0) {
            keyWordArr = keyWord.split("");
        }
    }
    console.log(`Your generated password is ${combinedStrArr.reverse().join("")}`);
    function isVowel(char) {
        char = char.toUpperCase();
        let result;

        result = char == "A" || char == "E" || char == "I" || char == "O" || char == "U"
        return result
    }
}
passwordGenerator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
])
