function meetings(input) {
    let meetingsSchedule = {}

    let addData = (input, schedule) => {
        for (let entry of input) {
            let [day, name] = entry.split(" ");
            if (!schedule.hasOwnProperty(day)) {
                schedule[day] = name;
                console.log(`Scheduled for ${day}`);
            } else {
                console.log(`Conflict on ${day}!`);
            }
        }
        return schedule;
    }
    let printData = (schedule) => {
        let entries = Object.entries(schedule)
        for (const [day, name] of entries) {
            console.log(`${day} -> ${name}`);
        }
    }

    addData(input, meetingsSchedule);
    printData(meetingsSchedule);
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)