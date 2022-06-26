function vacationBookList(bookSizeInput, pagesPerHourInput, daysInput) {
    let bookSize = Number(bookSizeInput);
    let pagesPerHour = Number(pagesPerHourInput);
    let days = Number(daysInput);

    let hoursPerBook = bookSize / pagesPerHour;
    let hoursPerDay = hoursPerBook / days;

    console.log(hoursPerDay);
}

vacationBookList("432", "15", "4");