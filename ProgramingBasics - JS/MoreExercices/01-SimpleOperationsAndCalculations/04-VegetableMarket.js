function vegetableMarket(vegetablesPriceInput, fruitsPriceInput, vegetablesKgInput, fruitsKgInpit) {
    let vegetablesPrice = Number(vegetablesPriceInput);
    let fruitsPrice = Number(fruitsPriceInput);
    let vegetablesKg = Number(vegetablesKgInput);
    let fruitsKg = Number(fruitsKgInpit);

    let sumInLeva = (vegetablesPrice * vegetablesKg) + (fruitsPrice * fruitsKg);

    let sumInEuro = sumInLeva / 1.94;

    console.log(sumInEuro.toFixed(2));
}

vegetableMarket(0.194, 19.4, 10, 10,);