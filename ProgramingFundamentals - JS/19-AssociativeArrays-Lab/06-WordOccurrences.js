function wordOccurences(input) {

    let wordsCount = {};

    let countWords = (input, wordsObj) => {
        for (const word of input) {
            if (!wordsObj.hasOwnProperty(word)) {
                wordsObj[word] = 1;
            } else {
                wordsObj[word]++;
            }
        }
        return wordsObj;
    }

    let printSortedWords = (wordsObj) => {
        let sortedWordKeys = Object.keys(wordsObj)
            .sort((a, b) => wordsObj[b] - wordsObj[a])

        for (const word of sortedWordKeys) {
            console.log(`${word} -> ${wordsObj[word]} times`);
        }
    }
    countWords(input, wordsCount);
    printSortedWords(wordsCount);
}

wordOccurences(["Here", "is", "the", "first",
    "sentence", "Here", "is", "another", "sentence",
    "And", "finally", "the", "third", "sentence"])