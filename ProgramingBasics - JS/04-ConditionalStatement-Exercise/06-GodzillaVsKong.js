function godzillaVsKong(budgetInput, statistsInput, pricePSInput) {
    let budget = Number(budgetInput);
    let statists = Number(statistsInput);
    let pricePS = Number(pricePSInput);

    let decor = budget * 0.1;
    let priceForAllStatists = statists * pricePS;

    if (statists >= 150){
        priceForAllStatists = priceForAllStatists *0.9;
    }

    let totalCost = priceForAllStatists + decor;

    if (totalCost <= budget){
        console.log(`Action!`); 
        console.log(`Wingard starts filming with ${(budget-totalCost).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money!`); 
        console.log(`Wingard needs ${(totalCost-budget).toFixed(2)} leva more.`)    
    }


}

godzillaVsKong("20000","120","55.5");
