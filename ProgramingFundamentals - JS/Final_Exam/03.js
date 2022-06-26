// Degustation Party
function solve(input) {
    let operations = {
        like: (people, operands) => {
            let [person, meal] = operands
            if (!people.hasOwnProperty(person)) {
                people[person] = []
            }
            if (!people[person].includes(meal)) {
                people[person].push(meal);
            }
            return people
        },
        dislike: (people, operands, unlikedCount) => {
            let [person, meal] = operands
            if (!people.hasOwnProperty(person)) {
                console.log(`${person} is not at the party.`);
            } else if (!people[person].includes(meal)) {
                console.log(`${person} doesn't have the ${meal} in his/her collection.`);
            } else if (people.hasOwnProperty(person) && people[person].includes(meal)) {
                let index = people[person].indexOf(meal)
                people[person].splice(index, 1);
                unlikedCount++;
                console.log(`${person} doesn't like the ${meal}.`);
            }
            return [people, unlikedCount]
        },
    }
    let people = {}
    let unlikedCount = 0;
    while (input[0] !== "Stop") {
        let [command, ...operands] = input.shift().split("-");
        (command === "Like") ? people = operations.like(people, operands) :
            (command === "Dislike") ? [people, unlikedCount] = operations.dislike(people, operands, unlikedCount) : null
    }
    let sotredPeople = Object.keys(people).sort((a, b) => {
        return people[b].length - people[a].length || a.localeCompare(b)
    })
    sotredPeople.forEach(x => console.log(`${x}: ${people[x].join(", ")}`))
    console.log(`Unliked meals: ${unlikedCount}`);
}
// solve(["Like-Krisi-shrimps",
//     "Like-Krisi-soup",
//     "Like-Penelope-dessert",
//     "Like-Misho-salad",
//     "Stop"])
// solve(["Like-Krisi-shrimps",
//     "Dislike-Vili-carp",
//     "Dislike-Krisi-salad",
//     "Stop"])
// solve(["Like-Katy-fish",
//     "Dislike-Katy-fish",
//     "Stop"])