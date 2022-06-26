function hotelRoom(monthInput, nightsInput) {
    let month = monthInput;
    let nights = Number(nightsInput);

    let priceSt = 0;
    let priceApt = 0;

    switch (month) {
        case "May":
        case "October":
            priceSt = 50 * nights;

            priceApt = 65 * nights;

            if (nights > 7 && nights <= 14) {
                priceSt *= 0.95;
            } else if (nights >= 14) {
                priceSt *= 0.70;
            }

            break;
        case "June":            
        case "September":
            priceSt = 75.20 * nights;

            priceApt = 68.70 * nights;

            if (nights > 14) {
                priceSt *= 0.80;
            }
            break;
        case "July":           
        case "August":
            priceSt = 76 * nights;

            priceApt = 77 * nights;
            break;
    }


    if (nights > 14) {
        priceApt *= 0.9;
    }

    console.log(`Apartment: ${priceApt.toFixed(2)} lv.`);
    console.log(`Studio: ${priceSt.toFixed(2)} lv.`);


}


hotelRoom("August","20")