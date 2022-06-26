function countOccurences(sentence, searchedWord) {
    let i = 0;
    let newSentence = sentence.split(" ");
    for (const word of newSentence) {
        if (word === searchedWord) {
            i++;
        }
    }
    console.log(i);
    function censore(word) {
        return "*".repeat(word.length)
    }
}
countOccurences('This is a word and it also is a sentence', 'is')