function solve(arr1) {
    let index = 0;
    let bookNeeded = arr1[index];
    index++;
    let nextBook = arr1[index];

    let bookIsFound = false;

    while (arr1[index] !== "No More Books") {
        let nextBook = arr1[index];

        if (nextBook === bookNeeded) {
            bookIsFound = true;
            break;
        }

        index++;
    }

    if (bookIsFound === true) {
        console.log(`You checked ${index - 1} books and found it.`);
    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    }


}
solve(["Troy", "Stronger", "Life Style", "Troy"]);