function building(buildingInput) {
    let index = 0;
    let floor = Number(buildingInput[index]);
    index++;
    let rooms = Number(buildingInput[index]);

    for (let i = floor; i >= 1; i--) {
        let floorXroom = "";
        for (let j = 0; j <= rooms; j++) {
            if (i === floor) {
                floorXroom += "L" + i + j + " ";
            } else if (i % 2 === 0) {
                floorXroom += "O" + i + j + " ";
            } else if (i % 2 === 1) {
                floorXroom += "A" + i + j + " ";
            }
        }
        console.log(floorXroom);
    }
}
building(["6", "4"]);
// building(["9", "5"]);
// building(["4", "4"]);