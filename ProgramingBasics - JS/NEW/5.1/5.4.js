function solve(arr1) {
    let index = 0;
    let dailySteps = 0;

    while (index < arr1.length) {
        let currentSteps = arr1[index];

        if (currentSteps === "Going home") {
            let homeSteps = Number(arr1[index + 1]);
            dailySteps += homeSteps;
            break;
        } else {
            dailySteps += Number(currentSteps);
        }
        index++;
    }

    if (dailySteps >= 10000) {
        console.log(`Goal reached! Good job!`);
        console.log(`${dailySteps - 10000} steps over the goal!`);
    } else {
        console.log(`${10000 - dailySteps} more steps to reach goal.`);
    }
}
// solve(["1000", "1500", "2000", "6500"])
// solve(["1500", "300", "2500", "3000", "Going home", "200"])
// solve(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])
solve(["125", "250", "4000", "30", "2678", "4682"])

