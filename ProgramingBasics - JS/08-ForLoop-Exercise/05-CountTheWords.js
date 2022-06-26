function countWords(textInput) {
    let text = textInput;
    let countSpaces = 0;


    for (let i = 0; i < text.length; i += 1) {
        if (text[i] === ' ') {
            countSpaces += 1;
        }

    }

    let countWords = countSpaces + 1;

    if (countWords > 10) {
        console.log(`The message is too long to be send! Has ${countWords} words.`);
    } else {
        console.log('The message was send successfully!')
    }
}

countWords("This message has exactly eleven words. One more as it's allowed!");