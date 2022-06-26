function printMatrix(num) {
    function printRow(num) {
        let toPrint = "";
        for (let i = 0; i < num; i++) {
            toPrint += `${num} `
        }
        return toPrint;
    }

    function printColumns(num) {
        for (let i = 0; i < num; i++) {
            console.log(printRow(num));
        }
    }
    printColumns(num);
}
printMatrix(3)