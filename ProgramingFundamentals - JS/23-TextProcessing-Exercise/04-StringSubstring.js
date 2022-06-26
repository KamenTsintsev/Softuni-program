function stringSubstring(word, text) {
    let lowerWord = word.toLowerCase();
    let lowerText = text.toLowerCase().split(" ");

    if (lowerText.includes(lowerWord)) {
        console.log(lowerWord)
    } else {
        console.log(`${lowerWord} not found!`);
    }


}
stringSubstring('javascript',
    'JavaScript is the best programming language')