function oddOccurrences(sentence) {
    let allWordsCount = new Map();
    let oddWords = [];

    let wordsArr = sentence.toLowerCase().split(" ");

    for (const word of wordsArr) {
        if (!allWordsCount.has(word)) {
            allWordsCount.set(word, 1);
        } else {
            allWordsCount.set(word, allWordsCount.get(word) + 1)
        }
    }
    for (const [word, count] of allWordsCount) {
        if (count % 2 === 1) {
            oddWords.push(word);
        }
    }
    console.log(oddWords.join(" "));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')