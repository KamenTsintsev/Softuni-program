function solve(arr) {
    let longestSeq = []
    let leftmostI = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i]
        let currentSeq = [currentNum]

        for (let j = i + 1; j < arr.length; j++) {
            let nextNum = arr[j];
            if (nextNum === currentNum) {
                currentSeq.push(nextNum);
            } else {
                break;
            }
        }
        if (currentSeq.length > longestSeq.length) {
            longestSeq = currentSeq;
        } else if (currentSeq.length === longestSeq.length) {
            if (i < leftmostI) {
                leftmostI = i;
            }
        }
    }
    console.log(longestSeq.join(" "));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
