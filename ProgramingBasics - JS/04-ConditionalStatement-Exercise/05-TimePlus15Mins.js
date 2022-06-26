function timePlus15Mins(hoursInput, minutesInput) {
    let hours = Number(hoursInput);
    let minutes = Number(minutesInput) + 15;

    if (minutes >= 60) {
        hours = (hours + 1) % 24;
        minutes = (minutes) % 60;
        if (minutes < 10) {
            console.log(`${hours}:0${minutes}`);
        } else {
            console.log(`${hours}:${minutes}`);
        }

    } else {
        console.log(`${hours}:${minutes}`);
    }


}

timePlus15Mins("23", "59");