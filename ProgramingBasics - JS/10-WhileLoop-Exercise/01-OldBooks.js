function oldBooks(booksInput) {
    let index = 0;
    let bookNeeded = booksInput[index];
    index++;
    let nextBook = booksInput[index];

    let bookIsFound = false;

    while (booksInput[index] !== "No More Books") {
        let nextBook = booksInput[index];
        if (nextBook===bookNeeded){
            bookIsFound = true;
            break;
        }

        index++;
    }

    if (bookIsFound===true){
        console.log(`You checked ${index-1} books and found it.`);
    }else{
        console.log("The book you search is not here!");
        console.log(`You checked ${index-1} books.`)
    }
    
}

oldBooks(["Troy",
    "Stronger",
    "Life Style",
    "Troy"]);