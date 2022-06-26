function houseParty(arr) {
    let arrL = arr.length;
    let partyList = [];

    let goingCheck = (array, nameToCheck) => {
        let isThere = array.includes(nameToCheck);
        if (isThere) {
            console.log(`${nameToCheck} is already in the list!`);
        } else {
            array.push(nameToCheck);
        }
        return array;
    }
    let notGoingCheck = (array, nameToCheck) => {
        let isThere = array.includes(nameToCheck);
        if (isThere) {
            array = array.filter(x => {
                if (x !== nameToCheck) {
                    return x;
                }
            })
        } else {
            console.log(`${nameToCheck} is not in the list!`);
        }
        return array
    }
    let printList = array => {
        let arrayL = array.length;
        for (let i = 0; i < arrayL; i++) {
            console.log(array[i]);
        }
    }

    for (let i = 0; i < arrL; i++) {
        let currentCommand = arr.shift().split(" ");
        let name = currentCommand[0];
        let command = currentCommand[2]

        if (command === "going!") {
            goingCheck(partyList, name)
        } else if (command === "not") {
            partyList = notGoingCheck(partyList, name)
        }
    }
    printList(partyList);
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
)
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
)