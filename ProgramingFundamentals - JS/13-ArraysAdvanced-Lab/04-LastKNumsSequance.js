function printSequance(n, k) {
    let arr = [1];
    let printAsString = (arr) => console.log(arr.join(" "));

    for (let i = 1; i < n; i++) {
        let [firstIndex, secondIndex] = [i - k, i];

        if (firstIndex < 0) {
            firstIndex = 0
        }
        let tempArr = arr.slice(firstIndex, secondIndex);
        let currentNum = tempArr.reduce((acc, num) => acc + num)
        arr.push(currentNum)
    }
    printAsString(arr);
}
printSequance(8, 2)