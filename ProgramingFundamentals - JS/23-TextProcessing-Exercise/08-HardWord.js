function hardWords(arr) {
    let wordsArr = arr[1];
    let sentenceArr = arr[0].split(" ")
    for (let z = 0; z < sentenceArr.length; z++) {
        let toBeReplaced = sentenceArr[z];
        if (toBeReplaced.startsWith("_")) {
            let toBeReplacedArr = toBeReplaced.split("");
            let excessSymbols = [];
            let wordToBeReplaced = "";
            for (let i = toBeReplacedArr.length - 1; i >= 0; i--) {
                if (toBeReplacedArr[i] !== "_") {
                    excessSymbols.unshift(toBeReplacedArr[i])
                } else {
                    wordToBeReplaced += toBeReplacedArr[i]
                }
            }
            excessSymbols = excessSymbols.join("")
            for (let word of wordsArr) {
                let template = "_".repeat(word.length)
                if (wordToBeReplaced === template) {
                    wordToBeReplaced = wordToBeReplaced.replace(template, word)
                }
            }
            sentenceArr[z] = wordToBeReplaced + excessSymbols
        }
    }
    console.log(sentenceArr.join(" "));
}


hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ ' +
    'things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s' +
    ' ankle is ________, and now it bothers me even more.Every night Mom cooks ___ on your recipe because' +
    ' it is the most delicious.I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)