function fruitMarket(strawberriesPriceInput, bananasAmtInput, orangesAmtInput, raspberriesAmtInput, strawberriesAmtInput) {
    let strawberriesPrice = Number(strawberriesPriceInput);
    let raspberriesPrice = strawberriesPrice / 2;
    let orangesPrice = raspberriesPrice - raspberriesPrice * 0.4;
    let bananasPrice = raspberriesPrice - raspberriesPrice * 0.8;

    let sumStrawberries = strawberriesPrice * strawberriesAmtInput;
    let sumRaspberries = raspberriesPrice * raspberriesAmtInput;
    let sumOranges = orangesPrice * orangesAmtInput;
    let sumBananas = bananasPrice * bananasAmtInput;

    let moneyNeeded = sumBananas + sumOranges + sumRaspberries + sumStrawberries;

    console.log(moneyNeeded);

}

fruitMarket("63.5", "3.57", "6.35", "8.15", "2.5");