function cleverLily(ageInput, washingMachinePriceInput, toyPriceInput) {
    let age = Number(ageInput);
    let washingMachinePrice = Number(washingMachinePriceInput);
    let toyPrice = Number(toyPriceInput);

    let addingmoney = 0
    let bDayMoney = 0;
    let toyMoney = 0;

    let totalMoney = 0;  

    for (let i = 0; i <= age; i += 2) {
        if (i === 0) {
            bDayMoney += addingmoney;
            addingmoney += 10;
        } else {
            bDayMoney += addingmoney - 1;
            addingmoney += 10;
        }
    }

    for(let i =1; i<=age; i+=2){
        toyMoney += toyPrice
    }

totalMoney = toyMoney+bDayMoney;



    if(totalMoney>=washingMachinePrice){
        let moneyLeft = totalMoney-washingMachinePrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    }else{
        let moneyNeeded = washingMachinePrice-totalMoney;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
}
cleverLily(10, 170, 6)