function solve(arr1) {
    let sentence = String(arr1);

    let spaces = 0;

    for (let i = 1; i <= sentence.length; i++) {
        if (sentence[i] === " ") {
            spaces += 1;
        }
    }

    spaces += 1;

    if (spaces => 10) {
        console.log(`The message is too long to be send!Has ${spaces} words.`);
    } else {
        console.log("The message was send successfully!");
    }
}

solve("This message has exactly eleven words. One more as it's allowed!");