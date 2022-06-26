function worldRecord(timeToBeatInput, distanceInput, secondsPerMeterInput) {
    let timeToBeat = Number(timeToBeatInput);
    let distance = Number(distanceInput);
    let secondsPerMeter = Number(secondsPerMeterInput);

    let delay = Math.floor(distance / 15) * 12.5;
    let ivanTime = distance * secondsPerMeter + delay;

    if (ivanTime < timeToBeat) {
        console.log(`Yes, he succeeded! The new world record is ${ivanTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(ivanTime - timeToBeat).toFixed(2)} seconds slower.`);
    }

}

worldRecord(55555.67, 3017, 5.03);

