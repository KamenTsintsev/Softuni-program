function walking(stepsInput) {
    let index = 0;
    let dailysteps = 0;


    while (index < stepsInput.length) {
        let currentsteps = stepsInput[index];
        if (currentsteps === "Going home") {
            currentsteps = Number(stepsInput[index + 1]);
            dailysteps += currentsteps;
            break;
        } else {
            currentsteps = Number(stepsInput[index]);
            dailysteps += currentsteps;
        }

        index++;
    }

    if (dailysteps >= 10000) {
        let difference = dailysteps - 10000;
        console.log("Goal reached! Good job!");
        console.log(`${difference} steps over the goal!`);
    } else {
        let difference = 10000 - dailysteps;
        console.log(`${difference} more steps to reach goal.`);
    }
}
walking(["1000", "1500", "2000", "6500"]);
// walking(["1500", "300", "2500", "3000", "Going home", "200"]);
// walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
// walking(["125", "250", "4000", "30", "2678", "4682"]);