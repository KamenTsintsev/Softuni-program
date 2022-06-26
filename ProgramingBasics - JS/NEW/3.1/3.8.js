function solve(arr1, arr2, arr3, arr4) {
    let examH = Number(arr1);
    let examM = Number(arr2);
    let arrivalH = Number(arr3);
    let arrivalM = Number(arr4);

    let totalExamMin = examM + examH * 60;
    let totalArrivalMin = arrivalM + arrivalH * 60;

    if (totalArrivalMin > totalExamMin) {  //late
        console.log("Late");
        if (totalArrivalMin % totalExamMin < 60) {   //Less than Hour
            console.log(`${totalArrivalMin % totalExamMin} minutes after the start`);

        } else {                                     //More than Hour
            let minutes = (totalArrivalMin % totalExamMin) % 60;
            let hours = Math.floor((totalArrivalMin % totalExamMin) / 60);

            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log(`${hours}:${minutes} hours after the start`);
            }
        }
    } else if (totalArrivalMin <= totalExamMin) {     //early

        if (totalExamMin % totalArrivalMin <= 30) {  // On Time
            console.log("On time");
            if (totalExamMin % totalArrivalMin > 0) {
                console.log(`${totalExamMin % totalArrivalMin} minutes before the start`);
            }

        } else {                                     // Early
            console.log("Early");

            if (totalExamMin % totalArrivalMin < 60) {   //Less than Hour
                console.log(`${totalExamMin % totalArrivalMin} minutes before the start`);
            } else {                                     //More than Hour
                let minutes = (totalExamMin % totalArrivalMin) % 60;
                let hours = Math.floor((totalExamMin % totalArrivalMin) / 60);

                if (minutes < 10) {
                    console.log(`${hours}:0${minutes} hours before the start`);
                } else {
                    console.log(`${hours}:${minutes} hours before the start`);
                }
            }
        }
    }
}

solve("9", "30", "8", "31")
