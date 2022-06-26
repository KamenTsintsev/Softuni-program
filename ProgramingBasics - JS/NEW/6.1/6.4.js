function solve(arr1) {
    let index = 0;
    let judges = Number(arr1[index]);
    index++;
    let presName = arr1[index];
    index++;

    let problemCounter = 0;

    let totalAverage = 0;

    while (presName !== "Finish") {
        let currentAverage = 0;

        for (let i = 0; i < judges; i++) {
            let currentGrade = Number(arr1[index]);
            currentAverage += currentGrade;

            index++;
        }
        currentAverage /= judges;
        totalAverage += currentAverage;

        console.log(`${presName} - ${currentAverage.toFixed(2)}.`);

        presName = arr1[index];
        index++;
        problemCounter++;
    }
    totalAverage /= problemCounter;

    console.log(`Student's final assessment is ${totalAverage.toFixed(2)}.`);
}
solve(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"])
