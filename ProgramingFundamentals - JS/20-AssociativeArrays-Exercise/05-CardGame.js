function cardGame(input) {
    let people = new Map();
    setPeople(input, people);
    calculateScore(people);
    printScores(people);

    function printScores(people) {
        for (const person of people) {
            console.log(`${person[0]}: ${people.get(person[0]).score}`);
        }
    }
    function calculateScore(people) {
        for (const person of people) {
            let deck = people.get(person[0]).cards
            for (let card of deck) {
                let multiplier = card.split("").pop();
                let power = card.slice(0, ((card.length === 2) ? 1 : 2));
                multiplier = getMultiplier(multiplier);
                power = getPower(power)
                people.get(person[0]).score += multiplier * power
            }

        }
    }
    function setPeople(input, peopleMap) {
        for (const line of input) {
            let [name, deck] = line.split(": ");
            if (!peopleMap.has(name)) {
                peopleMap.set(name, { score: 0, cards: [] })
            }
            deck = deck.split(", ")
            for (const card of deck) {
                if (!peopleMap.get(name).cards.includes(card)) {
                    peopleMap.get(name).cards.push(card)
                }
            }
        }
    }
    function getMultiplier(multiplier) {
        switch (multiplier) {
            case "S":
                multiplier = 4;
                break;
            case "H":
                multiplier = 3;
                break;
            case "D":
                multiplier = 2;
                break;
            case "C":
                multiplier = 1;
                break;
        }
        return multiplier;
    }

    function getPower(power) {
        switch (power) {
            case "J":
                power = 11;
                break;
            case "Q":
                power = 12;
                break;
            case "K":
                power = 13;
                break;
            case "A":
                power = 14;
                break;
            default:
                power = Number(power)
                break;
        }
        return power;
    }

}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])