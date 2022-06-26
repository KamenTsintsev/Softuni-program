function oddSorting(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let sortedArrL = sortedArr.length / 2;
    let oddArr = []

    let print = (toPrint) => console.log(toPrint.join(" "));

    for (let i = 0; i < sortedArrL; i++) {
        oddArr.push(sortedArr.pop())
        oddArr.push(sortedArr.shift())
    }
    print(oddArr);
}
oddSorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 7])
oddSorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])