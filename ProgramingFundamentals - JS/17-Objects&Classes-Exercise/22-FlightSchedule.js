function flightSchedule(input) {
    let flightsArr = input[0];
    let flightsChanges = input[1];
    let flightsNeeded = input[2].join();

    let flights = {};

    for (let flight of flightsArr) {
        let [flightName, destination] = flight.split(" ");
        flights[flightName] = {
            Destination: destination,
            Status: "Ready to fly"
        }
    }

    for (let flight of flightsChanges) {
        let [flightName, statusChange] = flight.split(" ");
        if (flights.hasOwnProperty(flightName)) {
            flights[flightName].Status = statusChange;
        }
    }

    let flightNames = Object.keys(flights)

    for (const flight of flightNames) {
        if (flights[flight].Status === flightsNeeded) {
            console.log(flights[flight]);
        }
    }
}



flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']])