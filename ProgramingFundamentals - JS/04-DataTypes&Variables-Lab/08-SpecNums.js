function solve(arg1) {
    let num = arg1;

    for (let i = 1; i <= num; i++) {
        let currentNum = String(i);
        let sum = 0;
        // console.log(i);
        for (let j = 0; j < currentNum.length; j++) {
            sum += Number(currentNum[j]);
        }

        // if (sum === 5 || sum === 7 || sum === 11) {
        //     console.log(`${i} -> True`);
        // } else {
        //     console.log(`${i} -> False`);
        // }

        sum === 5 || sum === 7 || sum === 11 ? console.log(`${i} -> True`)
            : console.log(`${i} -> False`);

    }
}

solve(29)