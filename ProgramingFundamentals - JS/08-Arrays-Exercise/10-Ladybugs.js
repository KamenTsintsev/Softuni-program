function solve(arr) {
    let fieldSize = arr[0];
    let initialPos = arr[1].split(" ");
    let ladybugsField = [];

    for (let i = 0; i < fieldSize; i++) {
        ladybugsField.push(0)
    }

    for (let i = 0; i < fieldSize; i++) {
        let ladybugIndex = initialPos[i];
        if (ladybugIndex >= 0 && ladybugIndex < fieldSize) {
            ladybugsField[initialPos[i]] = 1;
        }
    }

    for (let i = 2; i < arr.length; i++) {
        let currentEl = arr[i].split(" ");
        let bugIndex = Number(currentEl[0]);
        let direction = currentEl[1];
        let moves = Number(currentEl[2]);

        if (ladybugsField[bugIndex] !== 1 || bugIndex < 0 || bugIndex >= fieldSize) {
            continue;
        }

        if (moves < 0 && direction === "right") {
            moves = Math.abs(moves);
            direction = "left";
        }
        if (moves < 0 && direction === "left") {
            moves = Math.abs(moves);
            direction = "right";
        }

        if (direction === "right") {
            ladybugsField[bugIndex] = 0
            bugIndex += moves;

            while (ladybugsField[bugIndex] === 1) {
                bugIndex += moves;
            }
            ladybugsField[bugIndex]++;

        } else if (direction === "left") {
            ladybugsField[bugIndex] = 0
            bugIndex -= moves;
            if (bugIndex < 0) {
                continue;
            } else {
                while (ladybugsField[bugIndex] === 1) {
                    bugIndex -= moves;
                }
                ladybugsField[bugIndex]++;
            }
        }

        if (ladybugsField.length > fieldSize) {
            let toDelete = ladybugsField.length - fieldSize
            ladybugsField.splice(fieldSize, toDelete)
        }
    }
    console.log(ladybugsField.join(" "));
}

solve([5, '3', '3 left 2', '1 left -2']);