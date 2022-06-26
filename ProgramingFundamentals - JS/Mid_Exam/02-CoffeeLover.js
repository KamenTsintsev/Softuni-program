function coffeeLover(arr) {
    let coffees = arr.shift().split(" ");
    let commandsCount = Number(arr.shift());

    let addCoffee = (array, commands) => {
        let coffeeToAdd = commands.shift();
        array.push(coffeeToAdd);
        return array;
    }
    let toRemove = (array, commands) => {
        let position = commands.shift();
        let count = Number(commands.shift());
        switch (position) {
            case "first":
                array.splice(0, count);
                break;
            case "last":
                let lastEl = array.length;
                array.splice(lastEl - count);
                break;
        }
        return array;
    }

    let toMove = (array, commands) => {
        let i1 = Number(commands.shift());
        let i2 = Number(commands.shift());
        let biggerI = Math.max(i1, i2)
        let smallerI = Math.min(i1, i2)
        let buffer = array.splice(biggerI, 1).join("");
        buffer = array.splice(smallerI, 1, buffer).join("");
        array.splice(biggerI, 0, buffer)

        return array;
    }
    let toReverse = (array) => {
        array = array.reverse();
        return array;
    }
    let toPrint = array => {
        console.log("Coffees:");
        console.log(array.join(" "));
    }

    for (let i = 0; i < commandsCount; i++) {
        let currentCommand = arr.shift().split(" ");
        let command = currentCommand.shift();

        switch (command) {
            case "Include":
                addCoffee(coffees, currentCommand);
                break;
            case "Remove":
                toRemove(coffees, currentCommand);
                break;
            case "Prefer":
                toMove(coffees, currentCommand);
                break;
            case "Reverse":
                toReverse(coffees)
                break;
        }

    }
    toPrint(coffees)
}

coffeeLover(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
    "5",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 0 1",
    "Prefer 3 1",
    "Reverse"])

solve(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
    "5",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 0 1",
    "Prefer 3 1",
    "Reverse"])



function solve(input) {

    let listOfCoffes = input[0].split(` `)
    let counterCommands = input[1];
    let arrL = listOfCoffes.length;
    let newArr = input.slice(2, arrL + 2)

    function operation(inputArr) {
        let command = inputArr.split(` `)
        let oppCom = command[0];
        let firstElem = command[1];
        let seconElem = command[2];


        switch (oppCom) {
            case `Include`:
                return listOfCoffes.push(firstElem)
            case `Remove`:
                if (arrL >= seconElem) {
                    switch (firstElem) {
                        case `first`:
                            return listOfCoffes.splice(0, seconElem);
                        case `last`:
                            return listOfCoffes.pop();
                    }
                }
                break;

            case `Prefer`:
                if (firstElem < arrL && seconElem < arrL) {
                    let buffer = listOfCoffes[firstElem];
                    listOfCoffes[firstElem] = listOfCoffes[seconElem];
                    listOfCoffes[seconElem] = buffer;
                }
                break;
            case `Reverse`:
                return listOfCoffes.reverse()

        }
    }

    for (let i = 0; i < newArr.length; i++) {
        operation(newArr[i]);
    }
    console.log(`Coffees:`)
    console.log(listOfCoffes.join(` `))

}