function fishingBoat(budgetInput, seasonInput, numberInput) {
    let budget = Number(budgetInput);
    let season = seasonInput;
    let number = Number(numberInput);
    let price = 0


    switch (season) {
        case "Spring":
            price += 3000;
            break;
        case "Summer":
        case "Autumn":
            price += 4200;
            break;
        case "Winter":
            price += 2600;
            break;
    }

    if (number<=6){
        price *=0.90;
    }else if(number <=11){
        price *=0.85;
    }else{
        price *= 0.75;
    }

    if (number%2===0&& season!=="Autumn"){
        price *=0.95
    }

    if (price <= budget){
        let change = budget - price;
        console.log(`Yes! You have ${change.toFixed(2)} leva left.`);
    }else{
        let change = price- budget;
        console.log(`Not enough money! You need ${change.toFixed(2)} leva.`);
    }

}

fishingBoat("3600",
"Autumn",
"6")
;