function pascalCaseSplitter(str) {
    let stringArr = str.split("");

    let word = [];
    let result = [];
    for (let i = 0; i < stringArr.length; i++) {
        let currentLetter = stringArr[i]
        word.push(currentLetter);
        let nextLetter = stringArr[i + 1]
        if ((nextLetter >= "A" && nextLetter <= "Z") || nextLetter === undefined) {
            result.push(word.join(""));
            word = [];
        }

    }
    console.log(result.join(", "));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')