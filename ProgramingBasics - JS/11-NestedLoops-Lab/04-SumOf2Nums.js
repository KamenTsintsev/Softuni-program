function sumOf2Nums(numInput) {
    let begin = Number(numInput[0]);
    let end = Number(numInput[1]);
    let magicNum = Number(numInput[2]);

    let counter = 0;
    let isFound = false;

    for (let i = begin; i <= end; i++) {
        for (let j = begin; j <= end; j++) {

            if (i + j === magicNum) {
                counter++;
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNum})`);
                isFound = true;
                break;
            } else {
                counter++;
            }
        }

        if (isFound) {
            break;
        }
    }

    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }

}
sumOf2Nums(["1", "10", "5"]);
// sumOf2Nums(["88", "888", "1000"]);
// sumOf2Nums(["23", "24", "20"]);
// sumOf2Nums(["23", "24", "20"]);