function solve(arr1, arr2) {
    let time = arr1;
    let age = Number(arr2);

    if (age < 0) {
        console.log("Error!");
        return;
    }

    if (time === "Weekday") {
        if (age >= 0 && age <= 18) {
            console.log("12$");
        } else if (age <= 64) {
            console.log("18$");
        } else if (age <= 122) {
            console.log("12$");
        } else {
            console.log("Error!");
        }
    } else if (time === "Weekend") {
        if (age >= 0 && age <= 18) {
            console.log("15$");
        } else if (age <= 64) {
            console.log("20$");
        } else if (age <= 122) {
            console.log("15$");
        } else {
            console.log("Error!");
        }
    } else if (time === "Holiday") {
        if (age >= 0 && age <= 18) {
            console.log("5$");
        } else if (age <= 64) {
            console.log("12$");
        } else if (age <= 122) {
            console.log("10$");
        } else {
            console.log("Error!");
        }
    }

}

