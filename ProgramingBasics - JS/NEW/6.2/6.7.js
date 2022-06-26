function solve(arr1) {
    let index = 0;

    let totalStandard = 0;
    let totalStudent = 0;
    let totalKid = 0;
    let totalTickets = 0

    while (arr1[index] !== "Finish") {
        let film = arr1[index];
        index++;
        let places = Number(arr1[index]);
        index++;
        let command = arr1[index];

        let filmTickets = 0;
        let filmStandard = 0;
        let filmStudent = 0;
        let filmKid = 0;

        while (command !== "End") {

            if (command === "student") {
                filmStudent++;
            } else if (command === "standard") {
                filmStandard++;
            } else if (command === "kid") {
                filmKid++;
            }

            filmTickets = filmStudent + filmStandard + filmKid;

            if (filmTickets >= places) {
                break;
            }
            index++;
            command = arr1[index];
        }

        totalTickets += filmTickets;
        totalStandard += filmStandard;
        totalStudent += filmStudent;
        totalKid += filmKid;

        console.log(`${film} - ${(filmTickets / places * 100).toFixed(2)}% full.`);
        index++;

    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(totalStudent / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(totalStandard / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(totalKid / totalTickets * 100).toFixed(2)}% kids tickets.`);
}
solve(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])
