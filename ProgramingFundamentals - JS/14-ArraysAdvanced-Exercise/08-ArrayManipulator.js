function arrayManipulator(initArr, commandsArr) {
    let add = (array, where, fromWhere) => {
        let toAdd = Number(fromWhere.shift())
        array.splice(where, 0, toAdd)
    };
    let addMany = (array, where, fromWhere) => {
        fromWhere.reverse();
        while (fromWhere.length > 0) {
            let toAdd = Number(fromWhere.shift())
            array.splice(where, 0, toAdd);
        }
    };
    let contains = (array, toFind) => { console.log(array.indexOf(toFind)); }
    let remove = (array, toRemove) => { array.splice(toRemove, 1) }
    let shift = (array, toShift) => {
        for (let i = 0; i < toShift; i++) {
            array.push(array.shift());
        }
    }
    let sumPairs = (array) => {
        let sumArr = []
        while (array.length > 0) {
            let num1 = array.shift();
            let num2 = array.shift();
            if (num2 === undefined) {
                num2 = 0
            }
            sumArr.push(num1 + num2);
        }
        array = sumArr.slice(0);
        return array
    }
    // let toPrintArray = (array) => {
    //     let toPrint = `[`
    //     for (let i = 0; i < array.length; i++) {
    //         if (i === array.length - 1) {
    //             toPrint += ` ${array[i]} `
    //         } else {
    //             toPrint += ` ${array[i]},`
    //         }
    //     }
    //     toPrint += "]"
    //     console.log(toPrint);
    // }
    let currentCommand = commandsArr.shift().split(" ")
    let command = currentCommand.shift();
    let index = Number(currentCommand.shift());

    while (command !== "print") {
        switch (command) {
            case "add":
                add(initArr, index, currentCommand);
                break;
            case "addMany":
                addMany(initArr, index, currentCommand);
                break;
            case "contains":
                contains(initArr, index);
                break;
            case "remove":
                remove(initArr, index);
                break;
            case "shift":
                shift(initArr, index);
                break;
            case "sumPairs":
                initArr = sumPairs(initArr);
                break;
        }
        currentCommand = commandsArr.shift().split(" ")
        command = currentCommand.shift();
        index = Number(currentCommand.shift());
    }

    console.log(initArr);
}


// arrayManipulator([1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
// )
arrayManipulator([1, 2, 4, 5, 6, 7],
    ["add 1 8", "contains 1", "contains -3", "print"]
)