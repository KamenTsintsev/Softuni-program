function charactersInRange(char1, char2) {
    let getAscii = char => { return char.charCodeAt(); }
    let getChar = ascii => { return String.fromCharCode(ascii); }
    let print = print => { console.log(print); }

    let ascii1 = getAscii(char1);
    let ascii2 = getAscii(char2);
    let lowerNum = Math.min(ascii1, ascii2)
    let higherNum = Math.max(ascii1, ascii2)
    let str = "";
    for (let i = lowerNum + 1; i < higherNum; i++) {
        str += `${getChar(i)} `;
    }

    print(str);
}

charactersInRange("a", "d")



