function piccolo(input) {

    let parkingLot = {}

    for (const line of input) {
        let [command, carNum] = line.split(", ");

        switch (command) {
            case "IN":
                parkingLot[carNum] = "IN";
                break;
            case "OUT":
                parkingLot[carNum] = "OUT";
                break;
        }
    }
    let parkingArr = []
    for (const car in parkingLot) {
        if (parkingLot[car] === "IN") {
            parkingArr.push(car)
        }
    }

    if (parkingArr.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        let sortedLot = parkingArr.sort((a, b) => a.localeCompare(b))
        for (const car of sortedLot) {
            console.log(car);
        }
    }
}
// function piccolo(input) {

//     let parkingLot = []

//     for (const line of input) {
//         let [command, carNum] = line.split(", ");

//         switch (command) {
//             case "IN":
//                 parkingLot.push(carNum);
//                 break;
//             case "OUT":
//                 parkingLot.splice(parkingLot.indexOf(carNum), 1)
//                 break;
//         }
//     }
//     if (parkingLot.length === 0) {
//         console.log("Parking Lot is Empty");
//     } else {
//         let sortedLot = parkingLot.sort((a, b) => a.localeCompare(b))

//         for (const car of sortedLot) {
//             console.log(car);
//         }
//     }
// }

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)