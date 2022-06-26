function pyramid(numInput) {
    let num = Number(numInput);

    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for (let rows = 1; rows <= numInput; rows++) {
        for (let cols = 1; cols <= rows; cols++) {

            if (current > num) {
                isBigger = true;
                break;
            }

            printCurrentLine += current + " ";
            current++;
        }

        console.log(printCurrentLine);
        printCurrentLine = "";
        if(isBigger){
            break;
        }

    }
}

pyramid([7]);
// pyramid([12]);
// pyramid([15]);