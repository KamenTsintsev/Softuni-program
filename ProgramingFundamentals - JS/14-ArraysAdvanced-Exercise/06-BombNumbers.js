function bombNumbers(arr, specArr) {
    let bomb = specArr[0];
    let pow = specArr[1];
    let sumOfArr = (array) => {
        return array.reduce((acc, num) => acc + num, 0);
    }
    while (arr.includes(bomb)) {
        let i = arr.indexOf(bomb)
        let start = i - pow;
        let toDel = pow * 2 + 1
        if (start < 0) {
            toDel += start
            start = 0
        }
        arr.splice(start, toDel)
    }
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === bomb) {
    //         let start = i - pow;
    //         let toDel = pow * 2 + 1
    //         if (start < 0) {
    //             toDel += start
    //             start = 0
    //         }
    //         arr.splice(start, toDel)
    //         i = -1;
    //     }
    // }
    console.log(sumOfArr(arr));
}

// bombNumbers([4, 5, 6, 7, 8, 9], [4, 2])
// bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3])
// bombNumbers([1, 7, 7, 1, 2, 3], [7, 1])
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 3])