function solve(arr1) {
    let index = 0;
    let sumNeeded = Number(arr1[index]);
    index++;
    let avMoney = Number(arr1[index]);
    index++;

    let days = 0;
    let spendDays = 0;

    while (avMoney < sumNeeded) {
        days++;

        let action = String(arr1[index]);
        let actMoney = Number(arr1[index + 1]);

        if (action === "save") {
            avMoney += actMoney;
            spendDays = 0;
        } else if (action === "spend") {
            avMoney -= actMoney;
            spendDays++;

            if (avMoney < 0) {
                avMoney = 0;
            }
        }

        if (spendDays === 5) {
            console.log(`You can't save money.`);
            console.log(`${days}`);
            break;
        }
        index += 2;
    }

    if (avMoney >= sumNeeded) {
        console.log(`You saved the money for ${days} days.`);
    }
}
solve(["2000", "1000", "spend", "1200", "save", "2000"])
// solve(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"])
// solve(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"])
