function processOddNums(arr) {
    let arrL = arr.length;
    let newArr = [];
    let printAsString = (toPrint) => console.log(toPrint.join(" "));

    for (let i = 0; i < arrL; i++) {
        if (i % 2 === 1) {
            newArr.unshift(arr[i]);
        }
    }
    printAsString(newArr.map((num) => num * 2))
}

processOddNums([10, 15, 20, 25])