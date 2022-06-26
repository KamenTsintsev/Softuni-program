function pets(daysInput, foodGivenInput, dogFoodInput, catFoodInput, turtleFoodInput) {
    let days = Number(daysInput);
    let foodGiven = Number(foodGivenInput);
    let dogFood = Number(dogFoodInput);
    let catFood = Number(catFoodInput);
    let turtleFood = Number(turtleFoodInput) / 1000;

    let foodNeeded = (dogFood + catFood + turtleFood) * days;

    if (foodGiven >= foodNeeded) {
        console.log(`${Math.floor(foodGiven - foodNeeded)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(foodNeeded - foodGiven)} more kilos of food are needed.`);
    }

}

pets(5, 10, 2.1, 0.8, 321);