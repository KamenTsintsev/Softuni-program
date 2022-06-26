function charityCampaign(daysAmountInput, bakersInput, cakesInput, pancakesInput, wafflesInput) {
    let daysAmount = Number(daysAmountInput);
    let bakers = Number(bakersInput);

    let cakes = Number(cakesInput) * 45;
    let pancakes = Number(pancakesInput) * 5.8;
    let waffles = Number(wafflesInput) * 3.2;

    let dailySum = (cakes + pancakes + waffles) * bakers;
    let totalSumBeforeExpenses = (dailySum * daysAmount);
    let totalSumAfterExpenses= totalSumBeforeExpenses - totalSumBeforeExpenses/8;

    console.log(totalSumAfterExpenses.toFixed(2));

}

charityCampaign("131","5","9","33","46");