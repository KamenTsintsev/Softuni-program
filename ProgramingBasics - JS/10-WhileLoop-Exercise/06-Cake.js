function cake(cakeInput) {
    let index = 0;
    let cakeW = Number(cakeInput[index]);
    index++;
    let cakeL = Number(cakeInput[index]);
    index++;


    let totalPieces = cakeW * cakeL;

    while (index < cakeInput.length) {
        let currentPieces = cakeInput[index];
        if (currentPieces === "STOP") {
            break;
        } else {
            currentPieces = Number(cakeInput[index]);
            totalPieces -= currentPieces;
        }
        index++;
    }
    
    if (totalPieces <= 0) {
        let piecesNeeded = Math.abs(totalPieces);
        console.log(`No more cake left! You need ${piecesNeeded} pieces more.`);
    } else {
        console.log(`${totalPieces} pieces are left.`);
    }
}

// cake(["10", "10", "20", "20", "20", "20", "21"]);
cake(["10","2","2","4","6","STOP"]);