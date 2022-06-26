function solve(arr1, arr2, arr3) {
    let type = String(arr1);
    let rows = Number(arr2);
    let columns = Number(arr3);

    let price = rows * columns;

    if (type == "Premiere") {
        price *= 12;
    } else if (type == "Normal") {
        price *= 7.50;
    } else if (type == "Discount") {
        price *= 5;
    }

    console.log(`${price.toFixed(2)} leva`);

}

solve("Normal", "21", "13")