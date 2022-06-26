function fuelTank(fuelInput, amountInput) {
    let fuel = fuelInput;
    let amount = Number(amountInput);

    if (amount >= 25) {
        if (fuel === "Diesel") {
            console.log(`You have enough ${fuel.toLowerCase()}.`);
        } else if (fuel === "Gasoline") {
            console.log(`You have enough ${fuel.toLowerCase()}.`);
        } else if (fuel === "Gas") {
            console.log(`You have enough ${fuel.toLowerCase()}.`);
        } else {
            console.log(`Invalid fuel!`);
        }
    } else {
        if (fuel === "Diesel") {
            console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
        } else if (fuel === "Gasoline") {
            console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
        } else if (fuel === "Gas") {
            console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
        } else {
            console.log(`Invalid fuel!`);
        }
    }

}

fuelTank("Diesel",
    200
);