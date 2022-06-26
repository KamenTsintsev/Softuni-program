function solve(arr1, arr2, arr3) {
    let budget = Number(arr1);
    let statists = Number(arr2);
    let priceForStats = Number(arr3) * statists;

    let decoration = budget * 0.1;

    if (statists > 150) {
        priceForStats *= 0.9;
    }

    let totalPrice = decoration + priceForStats;

    if (totalPrice > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs${(totalPrice - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalPrice).toFixed(2)} leva left.`);
    }
}

solve("20000", "120", "55.5")
