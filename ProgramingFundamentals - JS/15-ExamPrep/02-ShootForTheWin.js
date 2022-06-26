// function shootFTW(arr) {
//     let targets = arr.shift().split(" ").map(Number);
//     let command = arr.shift();
//     let targetCount = 0;

//     let shooting = (array, index) => {
//         let type = typeof (array[index])
//         if (type != "undefined") {
//             for (let i = 0; i < array.length; i++) {
//                 if (array[index] < array[i] && i !== index && array[i] > -1) {
//                     array[i] -= array[index];
//                 } else if (array[index] >= array[i] && i !== index && array[i] > -1) {
//                     array[i] += array[index];
//                 }
//             }
//             array[index] = -1
//             targetCount++;
//         }
//     };

//     let printResut = (array) => {
//         let toPrint = `Shot targets: ${targetCount} ->`
//         for (let i = 0; i < array.length; i++) {
//             toPrint += ` ${array[i]}`;
//         }
//         console.log(toPrint);
//     }

//     while (command !== "End") {
//         command = Number(command);
//         shooting(targets, command)
//         command = arr.shift();
//     }

//     printResut(targets)
// }

// shootFTW(["24 50 36 70",
//     "0",
//     "4",
//     "3",
//     "1",
//     "End"]);

// shootFTW(["30 30 12 60 54 66",
//     "5",
//     "2",
//     "4",
//     "0",
//     "End"])


function solve(arr) {
    let targets = arr.shift().split(' ').map(Number);
    let i = 0;
    let values = '';
    let shotTargets = [];
    let shotIndexes = [];
    let valueOfIndex = 0;
    let arrIncrease = [];
    // console.log(arr);
    while (arr[i] !== 'End') {
        let index = Number(arr[i]);
        // Keep in mind that you can't shoot a target, which is already shot. You also can't increase or reduce a target, which is considered shot. 
        if (index < targets.length && !shotIndexes.includes(targets.indexOf(targets[index]))) {
            shotIndexes.push(index);
            arrIncrease = targets.slice();
            targets.forEach(num => num > targets[index] && !shotIndexes.includes(targets.indexOf(num)) ? targets[targets.indexOf(num)] -= targets[index] : false);
            valueOfIndex = arrIncrease[index];
            targets[index] = -1;
            arrIncrease.forEach(num => num <= valueOfIndex && !shotIndexes.includes(targets.indexOf(num)) && targets.indexOf(num) !== -1 ? targets[targets.indexOf(num)] += valueOfIndex : false);
        }
        i++;
    }
    shotTargets = targets.filter(num => num === -1);
    targets.forEach(num => values += `${num} `);
    console.log(`Shot targets: ${shotTargets.length} -> ${values}`);
}