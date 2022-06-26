function solve(arr1, arr2) {
    let joinedArray = [];
    let length = arr1.length;
    for (let i = 0; i < length; i++) {
        if (i % 2 === 0) {
            joinedArray.push(Number(arr1[i]) + Number(arr2[i]))
        } else {
            joinedArray.push(arr1[i] + arr2[i])
        }
    }

    console.log(joinedArray.join(" - "));
}

solve(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)