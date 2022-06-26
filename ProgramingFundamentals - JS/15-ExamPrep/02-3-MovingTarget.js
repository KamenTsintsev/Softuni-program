function movingTarget(arr) {
    let targets = arr.shift().split(" ").map(Number);

    let currentCommand = arr.shift().split(" ");
    let command = currentCommand.shift();
    let index = Number(currentCommand.shift());
    let value = Number(currentCommand.shift());

    let shoot = (array, index, power) => {
        if (index >= 0 && index <= array.length - 1) {
            array[index] -= power;
            if (array[index] <= 0) {
                array.splice(index, 1);
            }
        }
    }

    let add = (array, index, hp) => {
        if (index < 0 || index > array.length - 1) {
            console.log("Invalid placement!");
        } else {
            array.splice(index, 0, hp)
        }
        return array;
    };

    let strike = (array, index, radius) => {
        let toStrike = radius * 2 + 1
        if (toStrike < array.length && (index - radius >= 0 && index + radius <= array.length - 1)) {
            array.splice(index - radius, toStrike)
        } else {
            console.log("Strike missed!");
        }
        return array;
    }

    let toPrint = array => console.log(array.join("|"));

    while (command !== "End") {

        switch (command) {
            case "Shoot":
                shoot(targets, index, value);
                break;
            case "Add":
                add(targets, index, value);
                break;
            case "Strike":
                targets = strike(targets, index, value);
                break;

            default:
                break;
        }
        currentCommand = arr.shift().split(" ");
        command = currentCommand.shift();
        index = Number(currentCommand.shift());
        value = Number(currentCommand.shift());
    }
    toPrint(targets);
}

movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])

// movingTarget(["1 2 3 4 5",
//     "Strike 0 1",
//     "End"])
