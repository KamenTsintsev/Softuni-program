function matchDates(input) {
    let regEx = /\b(?<!\d)(?<day>\d{2})(?<del>[-.\/])(?<month>[A-Z][a-z]{2})\k<del>(?<year>\d{4})\b/g;
    let validDate = null;
    while ((validDate = regEx.exec(input)) !== null) {
        let day = validDate.groups['day']
        let month = validDate.groups['month']
        let year = validDate.groups['year']
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}