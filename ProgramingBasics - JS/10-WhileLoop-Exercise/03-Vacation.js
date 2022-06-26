function vacation(moneyInput) {
    let index = 0;
    let moneyNeeded = Number(moneyInput[index]);
    index++;
    let currentMoney = Number(moneyInput[index]);
    index++;

    let days = 0;
    let spendDays = 0;

    while (currentMoney < moneyNeeded) {
        days++;
        let command = moneyInput[index];
        let cmdMoney = Number(moneyInput[index + 1]);
        if (command === "spend") {
            if (cmdMoney > currentMoney) {  //=
                currentMoney = 0;
            } else {
                currentMoney -= cmdMoney;
            }
            spendDays++;
        } else {
            spendDays = 0;
        }

        if (spendDays === 5) {
            console.log(`You can't save the money.`);
            console.log(days);
            break;
        }

        if (command === "save") {
            currentMoney += cmdMoney;
        }

        index += 2;
        
    }

    if (currentMoney >= moneyNeeded) {
        console.log(`You saved the money for ${days} days.`);
    }


}
// vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
// vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
// vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);