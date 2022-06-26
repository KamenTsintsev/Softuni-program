function fitnessCard(arg1, arg2, arg3, arg4) {
    let avMoney = Number(arg1);
    let sex = arg2;
    let age = Number(arg3);
    let sport = arg4;

    let sum = 0;

    switch (sport) {
        case "Gym":
            if (sex === "m") {
                sum = 42;
            } else {
                sum = 35;
            }

            if (age <= 19) {
                sum *= 0.8;
            }
            if (avMoney >= sum) {
                console.log(`You purchased a 1 month pass for ${sport}.`);
            } else {
                let diff = Math.abs(sum - avMoney)
                console.log(`You don't have enough money! You need $${diff.toFixed(2)} more.`);
            }

            break;
        case "Boxing":
            if (sex === "m") {
                sum = 41;
            } else {
                sum = 37;
            }
            if (age <= 19) {
                sum *= 0.8;
            }
            if (avMoney >= sum) {
                console.log(`You purchased a 1 month pass for ${sport}.`);
            } else {
                let diff = Math.abs(sum - avMoney)
                console.log(`You don't have enough money! You need $${diff.toFixed(2)} more.`);
            }

            break;
        case "Yoga":
            if (sex === "m") {
                sum = 45;
            } else {
                sum = 42;
            }
            if (age <= 19) {
                sum *= 0.8;
            }
            if (avMoney >= sum) {
                console.log(`You purchased a 1 month pass for ${sport}.`);
            } else {
                let diff = Math.abs(sum - avMoney)
                console.log(`You don't have enough money! You need $${diff.toFixed(2)} more.`);
            }

            break;
        case "Zumba":
            if (sex === "m") {
                sum = 34;
            } else {
                sum = 31;
            }
            if (age <= 19) {
                sum *= 0.8;
            }
            if (avMoney >= sum) {
                console.log(`You purchased a 1 month pass for ${sport}.`);
            } else {
                let diff = Math.abs(sum - avMoney)
                console.log(`You don't have enough money! You need $${diff.toFixed(2)} more.`);
            }

            break;
        case "Dances":
            if (sex === "m") {
                sum = 51;
            } else {
                sum = 53;
            }

            if (age <= 19) {
                sum *= 0.8;
            }
            if (avMoney >= sum) {
                console.log(`You purchased a 1 month pass for ${sport}.`);
            } else {
                let diff = Math.abs(sum - avMoney)
                console.log(`You don't have enough money! You need $${diff.toFixed(2)} more.`);
            }

            break;
        case "Pilates":

            if (sex === "m") {
                sum = 39;
            } else {
                sum = 37;
            }

            if (age <= 19) {
                sum *= 0.8;
            }
            if (avMoney >= sum) {
                console.log(`You purchased a 1 month pass for ${sport}.`);
            } else {
                let diff = Math.abs(sum - avMoney)
                console.log(`You don't have enough money! You need $${diff.toFixed(2)} more.`);
            }
            break;
    }
}
// fitnessCard(20,
//     "f",
//     15,
//     "Yoga")

// fitnessCard(50,"m",24,"Gym")
fitnessCard(10,
    "f",
    50,
    "Pilates")