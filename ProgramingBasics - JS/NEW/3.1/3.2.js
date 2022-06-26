function solve(arr1, arr2) {
    let degrees = Number(arr1);
    let time = String(arr2);

    let degNum = 0;
    let timeNum = 0

    if (10 <= degrees && degrees <= 18) {
        degNum = 1
    } else if (18 < degrees && degrees <= 24) {
        degNum = 2
    } else if (degrees >= 25) {
        degNum = 3
    }

    if (time == "Morning") {
        timeNum = 1
    } else if (time == "Afternoon") {
        timeNum = 2
    } else if (time == "Evening") {
        timeNum = 3
    }

    if (timeNum == 1 && degNum == 1) {
        console.log(`It's ${degrees} degrees, get your Sweatshirt and Sneakers.`);
    } else if (timeNum == 1 && degNum == 2) {
        console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
    } else if (timeNum == 1 && degNum == 3) {
        console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
    } else if (timeNum == 2 && degNum == 1) {
        console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
    } else if (timeNum == 2 && degNum == 2) {
        console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
    } else if (timeNum == 2 && degNum == 3) {
        console.log(`It's ${degrees} degrees, get your Swim Suit and Barefoot.`);
    } else if (timeNum == 3 && degNum == 1) {
        console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
    } else if (timeNum == 3 && degNum == 2) {
        console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
    } else if (timeNum == 3 && degNum == 3) {
        console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
    }
}

solve("16",
    "Morning")
