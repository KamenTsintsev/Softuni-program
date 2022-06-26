function traveling(travelInput) {
    let index = 0;
    let destination = travelInput[index];
    index++;
    let neededMoney = Number(travelInput[index]);
    index++;
    let currentMoney = Number(travelInput[index]);
    index++;

    while (destination !== "End") {
        let sum = 0;
        while (sum < neededMoney) {
            sum += currentMoney;
            if (sum >= neededMoney) {
                break;
            }
            currentMoney = Number(travelInput[index]);
            index++;
        }

        if (sum >= neededMoney) {
            console.log(`Going to ${destination}!`);
        }

        destination = travelInput[index];
        index++;
        neededMoney = Number(travelInput[index]);
        index++;
        currentMoney = Number(travelInput[index]);
        index++;
    }
}
// traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]);
traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);