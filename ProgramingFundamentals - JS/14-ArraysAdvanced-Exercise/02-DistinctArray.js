function removeRepeating(arr) {
    let arrL = arr.length;
    let removeNum = (array, start, n1) => {
        for (let j = start + 1; j < arrL; j++) {
            let secondNum = arr[j];
            if (n1 === secondNum) {
                array.splice(j, 1);
            }
        }
        return array;
    }
    let printArrAsString = toPrint => console.log(toPrint.join(" "));

    for (let i = 0; i < arrL; i++) {
        let currNum = arr[i];
        removeNum(arr, i, currNum)
    }
    printArrAsString(arr);
}

removeRepeating([1, 2, 3, 4])
removeRepeating([7, 8, 9, 7, 2, 3, 4, 1, 2])
removeRepeating([20, 8, 12, 13, 4, 4, 8, 5])