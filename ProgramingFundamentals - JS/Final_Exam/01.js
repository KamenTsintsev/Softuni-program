function solve(input) {
    let operations = {
        change: (code, operands) => {
            let [from, to] = operands
            while (code.includes(from)) {
                code = code.replace(from, to)
            }
            console.log(code);
            return code
        },
        includes: (code, operands) => {
            let substr = operands
            if (code.includes(substr)) {
                console.log("True");
            } else {
                console.log("False");
            }
            return code
        },
        end: (code, operands) => {
            let substr = operands
            if (code.endsWith(substr)) {
                console.log("True");
            } else {
                console.log("False");
            }
            return code
        },
        uppercase: (code) => {
            code = code.toUpperCase();
            console.log(code);
            return code
        },
        findIndex: (code, operands) => {
            let toFInd = operands
            console.log(code.indexOf(toFInd));
            return code
        },
        cut: (code, operands) => {
            let [startI, count] = operands.map(Number)
            code = code.slice(startI, startI + count)
            console.log(code);
            return code
        },
    }
    let code = input.shift();

    while (input[0] !== "Done") {
        let [command, ...operands] = input.shift().split(" ");

        (command === "Change") ? code = operations.change(code, operands) :
            (command === "Includes") ? code = operations.includes(code, operands) :
                (command === "End") ? code = operations.end(code, operands) :
                    (command === "Uppercase") ? code = operations.uppercase(code) :
                        (command === "FindIndex") ? code = operations.findIndex(code, operands) :
                            (command === "Cut") ? code = operations.cut(code, operands) : null;
    }
}
solve(["//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"])