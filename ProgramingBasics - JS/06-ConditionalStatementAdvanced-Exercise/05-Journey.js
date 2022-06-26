function journey(budgetInput, seasonInput) {
    let budget = Number(budgetInput);
    let season = seasonInput;
    let expenses = 0;


    if (budget <= 100) {
        if (season === "summer") {
            expenses = budget * 0.30;
            console.log("Somewhere in Bulgaria");
            console.log(`Camp - ${expenses.toFixed(2)}`);
        } else {
            expenses = budget * 0.70;
            console.log("Somewhere in Bulgaria");
            console.log(`Hotel - ${expenses.toFixed(2)}`);
        }
    } else if (budget <= 1000) {
        if (season === "summer") {
            expenses = budget * 0.40;
            console.log("Somewhere in Balkans");
            console.log(`Camp - ${expenses.toFixed(2)}`);
        } else {
            expenses = budget * 0.80;
            console.log("Somewhere in Balkans");
            console.log(`Hotel - ${expenses.toFixed(2)}`);
        }
    } else {
        expenses = budget * 0.90;
        console.log("Somewhere in Europe");
        console.log(`Hotel - ${expenses.toFixed(2)}`);
    }
}

journey("1500", "summer")
    ;