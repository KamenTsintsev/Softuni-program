function solve(arr1) {
    let totalMoney = 0;
    let money = 0;
    let btc = 0;
    let btc1st = 0;
    let day = 1;
    for (let i = 0; i < arr1.length; i++) {
        let gPerDay = Number(arr1[i]);

        if (day % 3 === 0) {
            gPerDay *= 0.7;
        }

        money = gPerDay * 67.51;
        totalMoney += money;

        while (totalMoney >= 11949.16) {
            btc++;
            totalMoney = totalMoney - 11949.16;
            if (btc === 1) {
                btc1st = day;
            }
        }

        day++;
    }
    console.log(`Bought bitcoins: ${btc}`);
    if (btc > 0) {
        console.log(`Day of the first purchased bitcoin: ${btc1st}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

// solve([100, 200, 300])
// solve([50, 100])
solve([3124.15, 504.212, 2511.124]);