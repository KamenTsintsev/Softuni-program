function solve(arg1, arg2, arg3) {
    let distance = arg1 / 100 * 7;
    let passengers = arg2 * 0.100;
    let pricePerL = arg3;

    let moneyNeeded = (distance + passengers) * pricePerL;

    console.log(`Needed money for that trip is ${moneyNeeded} lv.`);
}
solve(260, 9, 2.49)
solve(90, 14, 2.88)