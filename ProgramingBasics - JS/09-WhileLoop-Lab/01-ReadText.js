function readText(wordsInput) {
    let index = 0;
    while (wordsInput[index] !== "Stop") {
        console.log(`${wordsInput[index]}`);
        index++;
    }

}
readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);