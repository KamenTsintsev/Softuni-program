function solve(arr1) {
    let index = 0;
    let cakeW = Number(arr1[index]);
    index++;
    let cakeL = Number(arr1[index]);
    index++;

    let pieces = cakeL * cakeW;

    while (pieces > 0) {
        let command = arr1[index];

        if (command === "STOP") {
            console.log(`${pieces} pieces are left.`);
            return;
        } else {
            pieces -= Number(arr1[index]);
        }
        index++;
    }

    console.log(`No more cake left! You need ${Math.abs(pieces)} pieces more.`);

}
// solve(["10", "10", "20", "20", "20", "20", "21"])
solve(["10", "2", "2", "4", "6", "STOP"])

