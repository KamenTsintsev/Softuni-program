function firm(hoursNeededInput, daysInput, workersOTInput) {
    let hoursNeeded = Number(hoursNeededInput);
    let days = Number(daysInput);
    let workersOT = Number(workersOTInput);

    let workingHours = (days * 0.9) * 8;
    let hoursOT = workersOT * days * 2;

    let totalHours = Math.floor(workingHours + hoursOT);

    if ( totalHours>=hoursNeeded) {
        console.log(`Yes!${totalHours-hoursNeeded} hours left.`)
    }  else {
        console.log(`Not enough time!${hoursNeeded - totalHours} hours needed.`);
    }

}

firm(99, 3, 1);