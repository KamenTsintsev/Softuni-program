function solve(arr1, arr2, arr3) {
    let distance = Number(arr1)
    let input = String(arr2)
    let output = String(arr3)

    if (input == "mm" && output == "cm") {
        console.log((distance / 10).toFixed(3));
    } else if (input == "mm" && output == "m") {
        console.log((distance / 1000).toFixed(3));
    } else if (input == "cm" && output == "mm") {
        console.log((distance * 10).toFixed(3));
    } else if (input == "cm" && output == "m") {
        console.log((distance / 100).toFixed(3));
    } else if (input == "m" && output == "mm") {
        console.log((distance * 1000).toFixed(3));
    } else if (input == "m" && output == "cm") {
        console.log((distance * 100).toFixed(3));
    } else {
        console.log("Invalid Input or Output!");
    }
}

solve("150", "m", "m")