function volleyball(yearTypeInput, holidaysInput, homeDaysInput) {
    let yearType = yearTypeInput;
    let holidays = Number(holidaysInput) * (2 / 3);
    let homeDays = Number(homeDaysInput);

    let sofiaDays = (48 - homeDays) * (3 / 4);

    let totalPlays = sofiaDays + homeDays + holidays;

    if (yearType === "leap") {
        totalPlays *= 1.15;
    }

    console.log(Math.floor(totalPlays));

}

volleyball("leap", "5", "2")