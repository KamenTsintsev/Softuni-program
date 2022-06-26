function solve(arr1) {
    let index = 0;
    let days = Number(arr1[index]);
    index++;

    let totalWins = 0;
    let totalLoses = 0;

    let totalMoney = 0;

    for (let i = 0; i < days; i++) {
        let command = String(arr1[index]);

        let dailyWins = 0;
        let dailyLoses = 0;

        let dailyMoney = 0;

        while (command !== "Finish") {
            let result = String(arr1[index + 1]);

            if (result === "win") {
                dailyMoney += 20;
                dailyWins++;
            } else if (result === "lose") {
                dailyLoses++;
            }

            index += 2;
            command = String(arr1[index]);
        }

        if (dailyWins > dailyLoses) {
            totalMoney += dailyMoney * 1.1;
            totalWins++;
        } else {
            totalMoney += dailyMoney;
            totalLoses++;
        }
        index++
    }

    if (totalWins > totalLoses) {
        totalMoney *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}
// solve(["2", "volleyball", "win", "football", "lose", "basketball", "win", "Finish", "golf", "win", "tennis", "win", "badminton", "win", "Finish"])
solve(["3", "darts", "lose", "handball", "lose", "judo", "win", "Finish", "snooker", "lose", "swimming", "lose", "squash", "lose", "table tennis", "win", "Finish", "volleyball", "win", "basketball", "win", "Finish"])