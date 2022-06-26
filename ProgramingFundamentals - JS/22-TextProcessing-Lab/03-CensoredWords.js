function censoredWords(sentence, word) {
    let newSentence = sentence.replace(word, censore(word));
    while (newSentence.includes(word)) {
        newSentence = newSentence.replace(word, censore(word));
    }
    console.log(newSentence);
    function censore(word) {
        return "*".repeat(word.length)
    }
}
censoredWords('A small sentence with some words small', 'small')