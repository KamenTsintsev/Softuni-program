function pirates(input) {
    let cities = {};
    while (input[0] !== "Sail") {
        let [town, population, gold] = input.shift().split("||");
        population = Number(population);
        gold = Number(gold);
        if (!cities.hasOwnProperty(town)) {
            cities[town] = { "population": 0, "gold": 0 };
        }
        cities[town]["population"] += population;
        cities[town]["gold"] += gold;
    }
    while (input[0] !== "End") {
        let line = input.shift().split("=>");
        let command = line.shift();
        (command === "Plunder") ? plunder(line, cities) :
            (command === "Prosper") ? prosper(line, cities) :
                null;
    }
    function plunder(input, citiesObj) {
        let [town, population, gold] = input;
        population = Number(population);
        gold = Number(gold);
        citiesObj[town]["population"] -= population;
        citiesObj[town]["gold"] -= gold;
        console.log(`${town} plundered! ${gold} gold stolen, ${population} citizens killed.`);
        if (citiesObj[town]["population"] <= 0 || citiesObj[town]["gold"] <= 0) {
            console.log(`${town} has been wiped off the map!`);
            delete citiesObj[town];
        }
    }
    function prosper(input, citiesObj) {
        let [town, gold] = input;
        gold = Number(gold);
        if (gold >= 0) {
            cities[town]["gold"] += gold;
            console.log(`${gold} gold added to the city treasury. ${town} now has ${citiesObj[town]["gold"]} gold.`);
        } else {
            console.log("Gold added cannot be a negative number!");
        }
    }
    let sortedTowns = Object.keys(cities)
        .sort((a, b) => cities[b]["gold"] - cities[a]["gold"] || a.localeCompare(b))
    console.log(`Ahoy, Captain! There are ${sortedTowns.length} wealthy settlements to go to:`);
    sortedTowns.forEach(t => console.log(`${t} -> Population: ${cities[t]["population"]} citizens, Gold: ${cities[t]["gold"]} kg`))
}

// pirates(["Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"])
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])
