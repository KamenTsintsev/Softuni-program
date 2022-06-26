function solve(arr1, arr2, arr3) {
    let flower = String(arr1);
    let qty = Number(arr2);
    let budget = Number(arr3);

    if (flower == "Roses") {
        price = 5 * qty;
        if (qty >= 80) {
            price *= 0.9;
        }
    } else if (flower == "Dahlias") {
        price = 3.8 * qty;
        if (qty >= 90) {
            price *= 0.85;
        }
    } else if (flower == "Tulips") {
        price = 2.8 * qty;
        if (qty >= 80) {
            price *= 0.85;
        }
    } else if (flower == "Narcissus") {
        price = 3 * qty;
        if (qty <= 120) {
            price *= 1.15;
        }
    } else if (flower == "Gladiolus") {
        price = 2.5 * qty;
        if (qty <= 80) {
            price *= 1.2;
        }
    }

    if (budget > price) {
        console.log(`Hey, you have a great garden with ${qty} ${flower} and ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
    }
}

solve("Roses", "55", "250")
