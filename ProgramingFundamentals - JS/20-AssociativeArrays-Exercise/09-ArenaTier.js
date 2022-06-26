function arenaTier(input) {
    let gladiators = {};

    let index = 0;
    let command = input[index];
    while (command !== "Ave Cesar") {
        if (command.includes(" vs ")) {
            let [gladiator1, gladiator2] = command.split(" vs ");
            battle(gladiator1, gladiator2, gladiators)
        } else {
            addGladiatorAndSkill(command, gladiators)
        }
        index++;
        command = input[index];
    }
    sortAndPrint(gladiators)

    function sortAndPrint(objGladiators) {
        let sortedGladiatorsKeys = Object.keys(objGladiators)
            .sort((a, b) => {
                let [aPower, bPower] =
                    [getSkillsAndPower(a, objGladiators)[0],
                    getSkillsAndPower(b, objGladiators)[0]]
                return bPower - aPower || a.localeCompare(b);
            })
        for (const gladiator of sortedGladiatorsKeys) {
            console.log(`${gladiator}: ${getSkillsAndPower(gladiator, gladiators)[0]} skill`);
            let sortedSkills = Object.keys(gladiators[gladiator])
                .sort((a, b) => {
                    return (gladiators[gladiator][b]) - (gladiators[gladiator][a])
                        || a.localeCompare(b);
                })
                .forEach(s => console.log(`- ${s} <!> ${gladiators[gladiator][s]}`));
        }
    }
    function battle(gladiator1, gladiator2, objGladiators) {
        if (objGladiators.hasOwnProperty(gladiator1) &&
            objGladiators.hasOwnProperty(gladiator2)) {
            let [gladiator1Power, gladiator1Skills] = getSkillsAndPower(gladiator1, objGladiators);
            let [gladiator2Power, gladiator2Skills] = getSkillsAndPower(gladiator2, objGladiators);
            if (gladiator1Skills.some(skill => gladiator2Skills.includes(skill))) {
                delete objGladiators[gladiator1Power > gladiator2Power ? gladiator2
                    : gladiator1Power < gladiator2Power ? gladiator1 : null]
            }
        }
    }
    function getSkillsAndPower(gladiator, objGladiators) {
        let gladiatorSkills = Object.keys(objGladiators[gladiator]);
        let gladiatorPower = gladiatorSkills.reduce((a, s) => a += (objGladiators[gladiator][s]), 0);
        return [gladiatorPower, gladiatorSkills];
    }
    function addGladiatorAndSkill(command, objGladiators) {
        let [name, skill, power] = command.split(" -> ")
        power = Number(power);
        if (!objGladiators.hasOwnProperty(name)) {
            objGladiators[name] = {};
        }
        if (!objGladiators[name].hasOwnProperty(skill)) {
            objGladiators[name][skill] = power;
        } else if (objGladiators[name].hasOwnProperty(skill)) {
            if (objGladiators[name][skill] < power) {
                objGladiators[name][skill] = power;
            }
        }
    }
}
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
])