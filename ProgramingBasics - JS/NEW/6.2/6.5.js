function solve(arr1) {
    let index = 0;
    let destination = arr1[index];
    index++;
    let moneyNeeded = arr1[index];
    index++;

    while (destination !== "End") {
        let savings = 0;

        while (savings < moneyNeeded) {
            let currentMoney = Number(arr1[index]);
            savings += currentMoney;

            index++;
        }

        console.log(`Going to ${destination}!`);

        destination = arr1[index];
        index++;
        moneyNeeded = arr1[index];
        index++;
    }
}
solve(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"])



