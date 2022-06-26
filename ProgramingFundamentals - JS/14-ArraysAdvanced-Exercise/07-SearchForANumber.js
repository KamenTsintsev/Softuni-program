function searchForANum(initialArray, specNumbers) {
    let [toTake, toDel, toFind] = specNumbers;
    let finalArray = initialArray.slice(0, toTake);
    finalArray.splice(0, toDel);
    let counter = 0

    for (const el of finalArray) {
        if (el === toFind) {
            counter++;
        }
    }
    console.log(`Number ${toFind} occurs ${counter} times.`);
}
searchForANum([5, 2, 3, 3, 1, 6], [5, 2, 3])
searchForANum([7, 1, 5, 8, 2, 7], [3, 1, 5])