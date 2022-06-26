function solve(arr1, arr2, arr3) {
    let year = String(arr1);
    let holidays = Number(arr2);
    let homeWeekends = Number(arr3);

    let allWeekends = 48;
    let sofiaWeekends = allWeekends - homeWeekends;

    let plays = 3 / 4 * sofiaWeekends + 2 / 3 * holidays + homeWeekends;

    if (year == "leap") {
        plays *= 1.15;
    }

    console.log(Math.floor(plays));
}

solve("normal", "3", "2")
