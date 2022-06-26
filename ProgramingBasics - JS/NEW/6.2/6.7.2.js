function cinema(cinemaInput) {
    let index = 0;

    let totalTickets = 0;
    let allStandardT = 0;
    let allStudentsT = 0;
    let allKidsT = 0;

    while (cinemaInput[index] !== "Finish") {

        let film = cinemaInput[index];
        index++;
        let freeSpaces = Number(cinemaInput[index]);
        index++;
        let ticketType = cinemaInput[index];


        let standardT = 0;
        let studentsT = 0;
        let kidsT = 0;
        let currentTickets = 0;

        while (ticketType !== "End") {

            if (ticketType === "standard") {
                standardT++;
            } else if (ticketType === "student") {
                studentsT++;
            } else if (ticketType === "kid") {
                kidsT++;
            }

            currentTickets = standardT + kidsT + studentsT;

            if (currentTickets >= freeSpaces) {
                break;
            }
            index++;
            ticketType = cinemaInput[index];
        }

        totalTickets += currentTickets;
        allStandardT += standardT;
        allStudentsT += studentsT;
        allKidsT += kidsT;
        console.log(`${film} - ${((currentTickets / freeSpaces) * 100).toFixed(2)}% full.`);
        index++;
    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(allStudentsT / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(allStandardT / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(allKidsT / totalTickets * 100).toFixed(2)}% kids tickets.`);
}
cinema(["Taxi", "10", "standard", "kid", "student", "student",
    "standard", "standard", "End", "Scary Movie", "6", "student",
    "student", "student", "student", "student", "student", "Finish"]);
// cinema(["The Matrix", "20", "student", "standard","kid",
// "kid", "student", "student", "standard","student", "End",
//  "The Green Mile", "17", "student","standard", "standard",
//   "student", "standard", "student","End", "Amadeus", "3", 
//   "standard", "standard", "standard","Finish"]);