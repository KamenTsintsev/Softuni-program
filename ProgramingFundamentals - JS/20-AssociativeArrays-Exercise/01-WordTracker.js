function wordsTracker(input) {

    let wordsToCount = input.shift().split(" ");
    let wordsCount = new Map();

    for (let word of wordsToCount) {
        wordsCount.set(word, 0);
    }

    for (const word of input) {
        if (wordsCount.has(word)) {
            wordsCount.set(word, wordsCount.get(word) + 1)
        }
    }
    let sortedWords = Array.from(wordsCount.keys())
        .sort((a, b) => wordsCount.get(b) - wordsCount.get(a))
        .forEach(x => console.log(`${x} - ${wordsCount.get(x)}`))

}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count',
    'the', 'occurances', 'of', 'the', 'words', 'this',
    'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])
