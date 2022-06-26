function equalSumPositions(numInput) {
    let startNum = Number(numInput[0]);
    let endNum = Number(numInput[1]);

    let printLine = "";

    for (let i = startNum; i <= endNum; i++) {

        let currentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;

        for (let j = 0; j <= currentNum; j++) {
            let currentDigit = Number(currentNum.charAt(j));

            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }

        }

        if (evenSum === oddSum) {
            printLine += `${i} `;
        }
       
    }
    console.log(printLine);
    
}
equalSumPositions(["100000", "100050"]);