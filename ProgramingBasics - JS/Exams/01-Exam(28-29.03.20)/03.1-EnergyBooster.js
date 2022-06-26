function energyBooster(arg1, arg2, arg3) {
    let taste = `${arg1}`;
    let setType = `${arg2}`;
    let setNum = Number(arg3);

    let sum = 0

    switch (taste) {
        case "Watermelon": ;
            if (setType === "big") {
                sum = (5 * 28.70) * setNum;
            } else {
                sum = (2 * 56) * setNum;
            }
            break;
        case "Mango": ;
            if (setType === "big") {
                sum = (5 * 19.60) * setNum;
            } else {
                sum = (2 * 36.66) * setNum;
            }
            break;
        case "Pineapple": ;
            if (setType === "big") {
                sum = (5 * 24.80) * setNum;
            } else {
                sum = (2 * 42.10) * setNum;
            }
            break;
        case "Raspberry": ;
            if (setType === "big") {
                sum = (5 * 15.20) * setNum;
            } else {
                sum = (2 * 20) * setNum;
            }
            break;
    }

    if (sum >= 400 && sum <= 1000) {
        sum *= 0.85;
    } else if (sum > 1000){
        sum*=0.5;
    }
    console.log(`${sum.toFixed(2)} lv.`);
}
energyBooster("Watermelon",
    "big",
    4
)