function experienceGaining(arr) {
    let experienceNeeded = arr.shift();
    let battles = arr.shift();
    let totalEXP = 0;

    let isEnough = false;
    let battlesCount = 0

    for (let i = 0; i < battles; i++) {
        let currentEXP = arr[i];
        battlesCount++;

        if (battlesCount % 3 === 0) {
            currentEXP *= 1.15;
        } else if (battlesCount % 5 === 0) {
            currentEXP *= 0.9;
        } else if (battlesCount % 15 === 0) {
            currentEXP *= 1.05;
        }

        totalEXP += currentEXP;

        if (totalEXP >= experienceNeeded) {
            isEnough = true;
            break;
        }
    }

    if (isEnough) {
        console.log(`Player successfully collected his needed experience for ${battlesCount} battles.`);
    } else {
        let expNeeded = (experienceNeeded - totalEXP).toFixed(2)
        console.log(`Player was not able to collect the needed experience, ${expNeeded} more needed.`);
    }

}

// experienceGaining([500,
//     5,
//     50,
//     100,
//     200,
//     100,
//     30])

experienceGaining([500,
    5,
    50,
    100,
    200,
    100,
    20])

// experienceGaining([400,
//     5,
//     50,
//     100,
//     200,
//     100,
//     20])