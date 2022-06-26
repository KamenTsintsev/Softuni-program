function leapYears(leapYearInput, randomYearInput) {
    let leapYear = Number(leapYearInput);
    let randomYear = Number(randomYearInput);

    for (let i = leapYear; i <= randomYear; i += 4) {
        console.log(i);
    }
}

leapYears(1908, 1919);