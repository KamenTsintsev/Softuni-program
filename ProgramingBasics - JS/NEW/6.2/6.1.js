for (let hrs = 0; hrs < 3; hrs++) {

    for (let mins = 0; mins < 60; mins++) {

        if (hrs < 10) {
            if (mins < 10) {
                console.log(`0${hrs}:0${mins}`);
            } else {
                console.log(`0${hrs}:${mins}`);
            }
        } else {
            if (mins < 10) {
                console.log(`${hrs}:0${mins}`);
            } else {
                console.log(`${hrs}:${mins}`);
            }
        }
    }
}