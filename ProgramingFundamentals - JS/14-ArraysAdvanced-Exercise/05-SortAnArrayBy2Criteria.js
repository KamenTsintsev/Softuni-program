function sortBy2Criteria(arr) {
    let sortedArr = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    })
    console.log(sortedArr.join("\n"));
}
sortBy2Criteria(['alpha', 'beta', 'gamma'])
sortBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Anne', 'Harrison', 'George'])