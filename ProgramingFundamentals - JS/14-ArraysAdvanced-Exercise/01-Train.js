function train(arr) {
    let wagonsArr = arr.shift().split(" ").map(Number);
    let maxCap = Number(arr.shift());
    let arrL = arr.length;
    let wagonsArrL = wagonsArr.length

    let addWagons = (array, toAdd) => {
        return array.push(toAdd);
    }
    let fitPassengers = (array, arrayL, maxPassengers, toFit) => {
        for (let j = 0; j < arrayL; j++) {
            if (array[j] + toFit <= maxPassengers) {
                wagonsArr[j] += toFit;
                break;
            }
        }
        return array;
    }
    let printAsString = (toPrint) => console.log(toPrint.join(" "));

    for (let i = 0; i < arrL; i++) {
        let currentCommand = arr.shift().split(" ");
        let command = currentCommand[0];

        if (command === "Add") {
            addWagons(wagonsArr, currentCommand[1])
        } else {
            fitPassengers(wagonsArr, wagonsArrL, maxCap, Number(command))
        }
    }
    printAsString(wagonsArr)
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);

train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'])