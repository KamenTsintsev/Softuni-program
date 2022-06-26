function revealWords(words, sentence) {
    let wordsArr = words.split(", ")
    let sentenceArr = sentence.split(" ")
    for (let word of wordsArr) {
        for (let toBeReplaced of sentenceArr) {
            if (toBeReplaced.startsWith("*") && toBeReplaced.endsWith("*") && word.length === toBeReplaced.length) {
                sentenceArr.splice(sentenceArr.indexOf(toBeReplaced), 1, word)
            }
        }
    }
    console.log(sentenceArr.join(" "));
}
// function revealWords(words, sentence) {
//     let wordsArr = words.split(", ")
//     for (let word of wordsArr) {

//         let template = "*".repeat(word.length);
//         sentence = sentence.replace(template, word)
//     }
//     console.log(sentence);
// }

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages *****'
)