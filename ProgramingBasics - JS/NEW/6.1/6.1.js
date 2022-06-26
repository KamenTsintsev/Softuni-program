function solve(arr1) {
    let num = Number(arr1[0]);

    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for (let rows = 1; rows <= arr1; rows++) {
        for (let cols = 1; cols < rows; cols++) {

            if (current > num) {
                isBigger = true;
                break;
            }

            printCurrentLine += current + " ";
            current++;
        }

        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isBigger) {
            break;
        }
    }
}
solve([91])