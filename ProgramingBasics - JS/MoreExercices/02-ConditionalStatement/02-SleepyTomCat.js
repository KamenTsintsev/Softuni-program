function sleepyTomCat(weekendDaysInput) {
    let weekendDays = Number(weekendDaysInput);
    let workingDays = 365 - weekendDays;

    let yearlyPlayTime = 30000;
    let totalPlayTime = weekendDays * 127 + workingDays * 63;

    if (totalPlayTime > yearlyPlayTime) {
        let remainingTime = totalPlayTime - yearlyPlayTime;
        console.log('Tom will run away');
        console.log(`${parseInt(remainingTime / 60)} hours and ${remainingTime % 60} minutes more for play`);
    } else if (totalPlayTime < yearlyPlayTime) {
        let remainingTime = yearlyPlayTime - totalPlayTime;
        console.log('Tom sleeps well');
        console.log(`${parseInt(remainingTime / 60)} hours and ${remainingTime % 60} minutes less for play`);
    }

}

sleepyTomCat(20);