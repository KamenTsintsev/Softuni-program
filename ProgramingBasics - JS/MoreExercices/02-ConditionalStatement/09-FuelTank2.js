function fuelTank2(fuelInput, amountInput, clubCardInput) {
    let fuel = fuelInput;
    let amount = Number(amountInput);
    let clubCard = clubCardInput;
    let sum = 0;

    if (fuel === "Gasoline"){
        sum = amount*2.22;
        if (clubCard === "Yes") {sum -= 0.18 * amount}
    }else if (fuel === "Diesel"){
        sum = amount*2.33;
        if (clubCard === "Yes") {sum -= 0.12 * amount}
    }else if (fuel === "Gas") {
        sum = amount*0.93;
        if (clubCard === "Yes") {
            let discount = 0.08*amount;
            sum = sum- discount}
    }

    if (amount > 20 && amount <= 25){
        sum *= 0.92;
    }else if(amount > 25 ){
        sum *= 0.90;
    }else{

    }

    console.log(`${sum.toFixed(2)} lv.`)

}

fuelTank2("Gas", 30, "Yes");