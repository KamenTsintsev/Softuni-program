function solve(arr1) {
    let magicNum = Number(arr1[0]);

    let printLine = ``;

    for (let i = 1111; i <= 9999; i++) {
        let currentNum = "" + i;

        let flag = true

        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j))


            if (magicNum % currentDigit !== 0) {
                flag = false;
                break;
            }

        }
        if (flag) {
            printLine += `${currentNum} `
        } else {
            continue;
        }


    }
    console.log(printLine);
}

solve(["3"])