function solve(arr1, arr2, arr3) {
    let budget = Number(arr1);
    let season = String(arr2);
    let qty = Number(arr3);

    let price = 0;
    let discount = 0;

    if (qty <= 6) {
        discount = 0.9;
    } else if (qty <= 11) {
        discount = 0.85;
    } else {
        discount = 0.75;
    }

    if (season == "Spring") {
        price = 3000;
    } else if (season == "Summer") {
        price = 4200;
    } else if (season == "Autumn") {
        price = 4200;
    } else if (season == "Winter") {
        price = 2600;
    }

    if (qty % 2 == 0 && season != "Autumn") {
        price *= 0.95
    }

    let totalPrice = price * discount

    if (totalPrice < budget) {
        console.log(`Yes! You have ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva.`);
    }


}

solve("3600", "Summer", "6")
