function solve(arr1, arr2) {
    let budget = Number(arr1);
    let season = String(arr2);

    let place = String;
    let destination = String;
    let price = 0;


    if (budget <= 100) {
        destination = "Bulgaria";

        if (season == "summer") {
            price = budget * 0.3;
            place = "Camp";
        } else if (season == "winter") {
            price = budget * 0.7;
            place = "Hotel";
        }

    } else if (budget <= 1000) {
        destination = "Balkans";

        if (season == "summer") {
            price = budget * 0.4;
            place = "Camp";
        } else if (season == "winter") {
            price = budget * 0.8;
            place = "Hotel";
        }
    } else {
        destination = "Europe";
        price = budget * 0.9;
        if (season == "summer") {
            place = "Camp";
        } else if (season == "winter") {
            place = "Hotel";
        }
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} – ${price.toFixed(2)}`);
}

solve("50", "summer")