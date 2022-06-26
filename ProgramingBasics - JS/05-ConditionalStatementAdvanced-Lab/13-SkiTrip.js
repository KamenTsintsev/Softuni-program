function skiTrip(daysInput, roomInput, ratingInput) {
    let days = Number(daysInput) - 1;
    let roomType = roomInput;
    let rating = ratingInput;
    let cost = 0;


    switch (roomType) {
        case "room for one person":
            cost = 18 * days;
            break;
        case "apartment":
            if (days < 10) {
                cost = (25 * days) * 0.7;
            } else if (days <= 15) {
                cost = (25 * days) * 0.65;
            } else {
                cost = (25 * days) * 0.5;
            }
            break;
        case "president apartment":
            if (days < 10) {
                cost = (35 * days) * 0.9;
            } else if (days <= 15) {
                cost = (35 * days) * 0.85;
            } else {
                cost = (35 * days) * 0.8;
            }
            break;
    }

    if (rating === "positive") {
        cost += (cost * 0.25);
    } else {
        cost -= (cost * 0.1);
    }
    console.log(cost.toFixed(2));
}

skiTrip("2",
"apartment",
"positive")
;