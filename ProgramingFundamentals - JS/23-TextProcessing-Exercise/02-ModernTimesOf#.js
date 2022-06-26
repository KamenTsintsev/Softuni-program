// function modernTime(str) {

//     let strArr = str.split(" ")

//     for (let word of strArr) {
//         let newWord = [];
//         if (word.startsWith("#") && word.length !== 1) {
//             for (let letter of word.split("")) {
//                 if ((letter >= "a" && letter <= "z") || (letter >= "A" && letter <= "Z")) {
//                     newWord.push(letter)
//                 }
//             }
//             console.log(newWord.join(""));
//         }
//     }
// }
function modernTime(str) {
    let result = [];
    for (let word of str.split(" ")) {
        if (word.startsWith("#") && word.length !== 1) {
            result.push(word.substring(1))
        }
    }

    let final = [];
    for (let word of result) {
        let array = word.split("");
        let arrL = array.length;
        let flag = true;

        for (let i = 0; i < arrL; i++) {
            let currentCode = array[i].charCodeAt(0)

            if ((currentCode < 97 || currentCode > 122) &&
                (currentCode < 65 || currentCode > 90)) {
                flag = false;
            }
        }
        if (flag) {
            final.push(word)
        }
    }
    final.forEach(x => console.log(x))
}
modernTime('The symbol # is known #var.iously in English-speaking #regions as the #number sign')