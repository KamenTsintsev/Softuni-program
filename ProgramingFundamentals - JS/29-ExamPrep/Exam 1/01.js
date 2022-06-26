function imitationGame(arr) {
    let operations = {
        Insert: (code, operands) => {
            let [index, value] = operands
            index = Number(index);

            code = code.split("")
            code.splice(index, 0, value)
            code = code.join("")
            return code
        },
        move: (code, operands) => {
            let number = Number(operands);
            code = code.split("")
            let toMove = code.splice(0, number).join("");
            code = code.join("") + toMove
            return code
        },
        ChangeAll: (code, operands) => {
            let [from, to] = operands
            while (code.includes(from)) {
                code = code.replace(from, to)
            }
            return code
        },
    }

    let code = arr.shift();

    while (arr[0] !== "Decode") {
        let [command, ...operands] = arr.shift().split("|");

        (command === "Move") ? code = operations.move(code, operands) :
            (command === "Insert") ? code = operations.Insert(code, operands) :
                (command === "ChangeAll") ? code = operations.ChangeAll(code, operands) : null;
    }
    console.log(`The decrypted message is: ${code}`);
}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',])