function accountBalance(moneyInput) {
    let index = 0;
    let sum = 0;

    while (moneyInput[index] !== "NoMoreMoney") {
        let currentNum = Number(moneyInput[index])

        if (currentNum < 0) {
            console.log("Invalid operation!");
            break;
        }
        sum += currentNum;
        console.log(`Increase: ${currentNum.toFixed(2)}`);

        index++;
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}
accountBalance(["120", "45.55","-150",]);