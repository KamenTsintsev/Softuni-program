function transportPrice(kilometersInput, dayTimeInput) {
    let kilometers = Number(kilometersInput);
    let dayTime = dayTimeInput;

    if (kilometers < 20) {
        if (dayTime === "day") {
            let price = 0.70 + kilometers * 0.79;
            console.log(price.toFixed(2));
        } else if (dayTime === "night") {
            let price = 0.70 + kilometers * 0.90;
            console.log(price.toFixed(2));
        }
    } else if (kilometers < 100) {
        let price = kilometers * 0.09;
        console.log(price.toFixed(2));
    } else {
        let price =  kilometers * 0.06;
        console.log(price.toFixed(2));
    }

}

transportPrice(180, "day");