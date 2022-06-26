function theLift(arr) {
    let peopleInQ = Number(arr.shift());
    let wagons = arr.shift().split(" ").map(Number);
    let wagonsL = wagons.length;

    let isEmptyCheck = (array, value) => {
        let arrayL = array.length
        for (let i = 0; i < arrayL; i++) {
            if (array[i] < 4) {
                return value = true;
            }
        }
    };

    for (let i = 0; i < wagonsL; i++) {
        let peopleInNeed = 4 - wagons[i]
        if (peopleInQ >= peopleInNeed) {
            peopleInQ -= peopleInNeed;
            wagons[i] += peopleInNeed;
        } else {
            wagons[i] += peopleInQ;
            peopleInQ -= peopleInQ;
        }
    }

    let isEmpty = isEmptyCheck(wagons);
    if (peopleInQ === 0 && isEmpty) {
        console.log("The lift has empty spots!");
        console.log(wagons.join(" "));
    } else if (peopleInQ > 0 && !isEmpty) {
        console.log(`There isn't enough space! ${peopleInQ} people in a queue!`);
        console.log(wagons.join(" "));
    } else if (peopleInQ === 0 && !isEmpty) {
        console.log(wagons.join(" "));
    }
}
// theLift([
//     "15",
// "0 0 0 0 0"])
theLift([
    "10",
    "4 2 0"])