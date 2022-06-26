function toyShop(tripPriceInput, puzzleInput, dollInput, bearInput, minionInput, truckInput) {
    let tripPrice = Number(tripPriceInput);
    let puzzle = Number(puzzleInput);
    let doll = Number(dollInput);
    let bear = Number(bearInput);
    let minion = Number(minionInput);
    let truck = Number(truckInput);

    let amount = puzzle + doll + bear + minion + truck;
    let sum = puzzle * 2.6 + doll * 3 + bear * 4.1 + minion * 8.2 + truck * 2;

    if (amount >= 50) {
        sum = sum * 0.75;
    }

    sum = sum * 0.9;

    if(sum>=tripPrice){
        sum = sum - tripPrice;
        console.log(`Yes! ${sum.toFixed(2)} lv left.`);
    }else{
        sum = tripPrice-sum;
        console.log(`Not enough money! ${sum.toFixed(2)} lv needed.`);
    }

}

toyShop("320", "8", "2", "5", "5", "1");