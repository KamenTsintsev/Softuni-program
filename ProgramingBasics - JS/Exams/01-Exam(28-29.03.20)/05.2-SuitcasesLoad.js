function suitcasesLoad(input) {
    let index = 0;
    let obem = Number(input[index]);
    index++;

    let kufar = input[index];

    let broqch = 0;

    while (kufar !== "End") {
        kufar = Number(input[index]);
        broqch += 1;

        if (broqch % 3 === 0) {
            kufar *= 1.1;
        }

        if (obem >= kufar) {
            obem -= kufar;
            obem = obem.toFixed(1);
        } else {
            console.log("No more space!");
            broqch -= 1;
            obem -= kufar;
            break;
        }

        index++;
        kufar = input[index];


    }

    if (obem >= 0) {
        console.log("Congratulations! All suitcases are loaded!");
    }

    console.log(`Statistic: ${broqch} suitcases loaded.`);
}

// suitcasesLoad(['550', '100', '252', '72', 'End'])
// suitcasesLoad(['1000', '100', '252', '72', '100', '252', '72', 'End'])
suitcasesLoad(['700.5', '180', '340.6', '126', '220'])
// suitcasesLoad(['1200.2', '260', '380.5', '125.6', '305', 'End'])