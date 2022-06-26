function solve(arr1, arr2) {
    let month = String(arr1);
    let nights = Number(arr2);

    let studio = 0;
    let apartment = 0;

    if (month == "May" || month == "October") {
        studio = 50 * nights;
        apartment = 65 * nights;

        if (nights > 7 && nights <= 14) {
            studio *= 0.95;
        } else if (nights > 14) {
            studio *= 0.70;
        }

    } else if (month == "June" || month == "September") {
        studio = 75.20 * nights;
        apartment = 68.70 * nights;

        if (nights > 14) {
            studio *= 0.80;
        }

    } else if (month == "Jule" || month == "August") {
        studio = 76 * nights;
        apartment = 77 * nights;

    }

    if (nights > 14) {
        apartment *= 0.9;
    }

    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);

}

solve("August", "20")
