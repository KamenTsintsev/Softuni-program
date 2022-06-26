function cinema(typeInput, rowsInput, columnsInput) {
    let type = typeInput;
    let rows = Number(rowsInput);
    let columns = Number(columnsInput);

    let profits = rows*columns
    switch (type) {
        case"Premiere":
        profits *=12;
            break;
        case"Normal":
        profits *=7.5;
            break;
        case"Discount":
        profits *=5;
            break;
    }
    console.log(`${profits.toFixed(2)} leva`);

}

cinema("Premiere",
"10",
"12")
;