function smallShop(productInput, cityInput, amountInput) {
    let product = productInput;
    let city = cityInput;
    let amount = Number(amountInput);


    switch (city) {
        case "Sofia":
            if (product === "coffee") {
                let price = amount * 0.5;
                console.log(price);
            } else if (product === "water") {
                let price = amount * 0.8;
                console.log(price);
            } else if (product === "beer") {
                let price = amount * 1.2;
                console.log(price);
            } else if (product === "sweets") {
                let price = amount * 1.45;
                console.log(price);
            } else {
                let price = amount * 1.6;
                console.log(price);
            }
            break;
        case "Plovdiv":
            if (product === "coffee") {
                let price = amount * 0.4;
                console.log(price);
            } else if (product === "water") {
                let price = amount * 0.7;
                console.log(price);
            } else if (product === "beer") {
                let price = amount * 1.15;
                console.log(price);
            } else if (product === "sweets") {
                let price = amount * 1.3;
                console.log(price);
            } else {
                let price = amount * 1.5;
                console.log(price);
            }
            break;
        case "Varna":
            if (product === "coffee") {
                let price = amount * 0.45;
                console.log(price);
            } else if (product === "water") {
                let price = amount * 0.7;
                console.log(price);
            } else if (product === "beer") {
                let price = amount * 1.1;
                console.log(price);
            } else if (product === "sweets") {
                let price = amount * 1.35;
                console.log(price);
            } else {
                let price = amount * 1.55;
                console.log(price);
            }
            ; break;
    }

}

smallShop("sweets", "Sofia", 2.23);