function solve(arg1) {
    let weekDays = ["Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"];

    if (arg1 >= 1 && arg1 <= 7) {
        console.log(weekDays[arg1 - 1]);
    } else {
        console.log("Invalid day!");
    }
}