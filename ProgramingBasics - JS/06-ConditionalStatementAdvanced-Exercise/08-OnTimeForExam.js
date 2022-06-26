function onTimeForExam(examHInput, examMInput, arrivalHInput, arrivalMInput) {
    let examH = Number(examHInput);
    let examM = Number(examMInput);
    let arrivalH = Number(arrivalHInput);
    let arrivalM = Number(arrivalMInput);

    examM += (examH * 60);
    arrivalM += (arrivalH * 60);

    let timeM = examM - arrivalM

    if (examM === arrivalM || (timeM > 0 && timeM <= 30)) {
        console.log("On Time");
        if (timeM > 0 && timeM <= 30){
            console.log(`${timeM} minutes before the start`);
        }
    
    } else if (timeM > 30) {
        console.log("Early");
        if (timeM >= 60) {
            arrivalM = timeM % 60;
            arrivalH = Math.floor(timeM / 60);
            if (arrivalM >= 0 && arrivalM <= 9) {
                console.log(`${arrivalH}:0${arrivalM} hours before the start`);
            } else {
                console.log(`${arrivalH}:${arrivalM} hours before the start`);
            }
        } else {
            console.log(`${timeM} minutes before the start`);
        }

    } else if (timeM < 0) {
        console.log("Late");
        if (Math.abs(timeM) >= 60) {
            arrivalM = timeM % 60;
            arrivalH = Math.floor(timeM / 60);
            if (arrivalM >= 0 && arrivalM <= 9) {
                console.log(`${arrivalH}:0${arrivalM} hours after the start`);
            } else {
                console.log(`${arrivalH}:${arrivalM} hours after the start`);
            }
        } else {
            console.log(`${Math.abs(timeM)} minutes after the start`)
        }
    }
}

onTimeForExam("10",
    "00",
    "10",
    "00")
    ;