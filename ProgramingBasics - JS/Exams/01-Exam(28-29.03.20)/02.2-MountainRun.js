function mountainRun(arg1, arg2, arg3) {
    let record = Number(arg1);
    let meters = Number(arg2);
    let MPS = Number(arg3);

    let slowing = (Math.floor(meters / 50)) * 30;

    let totalTime = meters * MPS + slowing;

    if (totalTime >= record) {
        let diff = Math.abs(record - totalTime);
        console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    }

}
mountainRun(5554.36,
    1340,
    3.23
)