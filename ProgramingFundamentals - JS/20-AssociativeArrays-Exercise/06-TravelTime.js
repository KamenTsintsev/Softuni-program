function travelTime(input) {

    let destinations = {}
    setDestinations(input, destinations);
    sortAndPrint(destinations);

    function sortAndPrint(objDestinations) {
        let sortedCountries = Object.keys(objDestinations)
            .sort((a, b) => a.localeCompare(b))
        for (const country of sortedCountries) {
            let print = `${country} ->`
            let sortedCitiesAsc = Object.keys(objDestinations[country])
                .sort((a, b) => {
                    return objDestinations[country][a] - objDestinations[country][b];
                })

            for (const city of sortedCitiesAsc) {
                print += ` ${city} -> ${objDestinations[country][city]}`
            }
            console.log(print);
        }
    }

    function setDestinations(input, objDestinations) {
        for (const line of input) {
            let [country, city, price] = line.split(" > ");
            if (!objDestinations.hasOwnProperty(country)) {
                objDestinations[country] = {};
            }

            if (!objDestinations[country].hasOwnProperty(city)) {
                objDestinations[country][city] = Number(price);
            } else if (objDestinations[country][city] > Number(price)) {
                objDestinations[country][city] = Number(price);
            }

        }
    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 50",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sopot > 5000",
    "Bulgaria > Sofia > 200"
])