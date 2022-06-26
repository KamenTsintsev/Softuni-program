function solve(arr1) {
    let start = Number(arr1[0]);
    let end = Number(arr1[1]);
    let magicNum = Number(arr1[2]);

    let counter = 0;

    for (let x = start; x <= end; x++) {
        for (let y = start; y <= end; y++) {
            counter++;
            if (x + y === magicNum) {
                console.log(`Combination N:${counter} (${x} + ${y} = ${magicNum})`);
                return;
            }

        }

    }

    console.log(`${counter} combinations - neither equals ${magicNum}`);
}
solve(["1", "10", "5"]);
// solve(["88", "888", "1000"]);
