function tradeComissions(cityInput, profitsInput) {
    let city = cityInput;
    let profits = Number(profitsInput);
    let comissions = profits;

    switch (city) {
        case "Sofia":
            if (profits >= 0 && profits <= 500) {
                comissions *= 0.05;
                console.log(comissions.toFixed(2));
            } else if (profits > 500 && profits <= 1000) {
                comissions *= 0.07;
                console.log(comissions.toFixed(2));
            } else if (profits > 1000 && profits <= 10000) {
                comissions *= 0.08;
                console.log(comissions.toFixed(2));
            } else if (profits > 10000) {
                comissions *= 0.12;
                console.log(comissions.toFixed(2));
            } else {
                console.log("error");
            }
            break;
        case "Varna":
            if (profits >= 0 && profits <= 500) {
                comissions *= 0.045;
                console.log(comissions.toFixed(2));
            } else if (profits > 500 && profits <= 1000) {
                comissions *= 0.075;
                console.log(comissions.toFixed(2));
            } else if (profits > 1000 &&profits <= 10000) {
                comissions *= 0.1;
                console.log(comissions.toFixed(2));
            } else if ( profits > 10000) {
                comissions *= 0.13;
                console.log(comissions.toFixed(2));
            } else {
                console.log("error");
            }
            break;
        case "Plovdiv":
            if (profits >= 0 && profits <= 500) {
                comissions *= 0.055;
                console.log(comissions.toFixed(2));
            } else if (profits > 500 && profits <= 1000) {
                comissions *= 0.08;
                console.log(comissions.toFixed(2));
            } else if (profits > 1000 && profits <= 10000) {
                comissions *= 0.12;
                console.log(comissions.toFixed(2));
            } else if (profits > 10000) {
                comissions *= 0.145;
                console.log(comissions.toFixed(2));
            } else {
                console.log("error");
            }
            break;
        default: console.log("error"); break;
    }


}

tradeComissions("Plovdiv", -20)