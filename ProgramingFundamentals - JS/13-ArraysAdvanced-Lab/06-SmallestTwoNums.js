function smallestTwoNums(arr) {
    let sortedArr = arr.sort((a, b) => a - b)
    let smTwoNums = sortedArr.slice(0, 2).join(" ");
    console.log(smTwoNums);
}
smallestTwoNums([30, 15, 50, 5])