function listOfProducts(arr) {
    let sortedArr = arr.sort();
    let sortedArrL = sortedArr.length

    for (let i = 0; i < sortedArrL; i++) {
        console.log(`${i + 1}.${sortedArr[i]}`);
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
listOfProducts(['Watermelon', 'Banana', 'Apples'])