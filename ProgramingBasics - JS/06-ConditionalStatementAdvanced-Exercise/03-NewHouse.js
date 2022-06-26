function newHouse(floweTypeInput, amountInput, budgetInput) {
    let flowerType = floweTypeInput;
    let amount = Number(amountInput);
    let budget = Number(budgetInput);

    let costs = 0;

    switch (flowerType) {
        case "Roses":
            costs = amount * 5;
            if (amount > 80) {
                costs *= 0.9;
            }
            break;
        case "Dahlias":
            costs = amount * 3.8;
            if (amount > 90) {
                costs *= 0.85;
            }
            break;
        case "Tulips":
            costs = amount * 2.8;
            if (amount > 80) {
                costs *= 0.85;
            }
            break;
        case "Narcissus":
            costs = amount * 3;
            if (amount < 120) {
                costs *= 1.15;
            }
            break;
        case "Gladiolus":
            costs = amount * 2.5;
            if (amount < 80) {
                costs *= 1.2;
            }
            break;

    }

    if (budget >= costs) {
        let change = budget - costs;
        console.log(`Hey, you have a great garden with ${amount} ${flowerType} and ${change.toFixed(2)} leva left.`);
    } else {
        let change = costs - budget;
        console.log(`Not enough money, you need ${change.toFixed(2)} leva more.`)
    }


}

newHouse("Narcissus", 120, 360);