function hoCL(input) {
    let heroes = {};
    addHeroes(input, heroes)

    while (input[0] !== "End") {
        let [command, ...params] = input.shift().split(" - ");

        (command === "CastSpell") ? castSpell(params, heroes) :
            (command === "TakeDamage") ? takeDamage(params, heroes) :
                (command === "Recharge") ? recharge(params, heroes) :
                    (command === "Heal") ? heal(params, heroes) : null
    }

    let sortedHeroes = Object.keys(heroes)
        .sort((a, b) => {
            return heroes[b]["HP"] - heroes[a]["HP"]
                || a.localeCompare(b)
        })
        .forEach(hero => {
            console.log(hero);
            console.log(`  HP: ${heroes[hero]["HP"]}`);
            console.log(`  MP: ${heroes[hero]["MP"]}`);
        })

    function castSpell(input, heroesObj) {
        let [heroName, mpNeeded, spellName] = input
        mpNeeded = Number(mpNeeded);

        if (heroesObj[heroName]["MP"] >= mpNeeded) {
            heroesObj[heroName]["MP"] -= mpNeeded;
            console.log(`${heroName} has successfully cast ${spellName} and now has ${heroesObj[heroName]["MP"]} MP!`);
        } else {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
        }
    }
    function takeDamage(input, heroesObj) {
        let [heroName, damage, attacker] = input
        damage = Number(damage);
        heroesObj[heroName]["HP"] -= damage;

        if (heroesObj[heroName]["HP"] > 0) {
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroesObj[heroName]["HP"]} HP left!`);
        } else {
            console.log(`${heroName} has been killed by ${attacker}!`);
            delete heroes[heroName];
        }
    }
    function recharge(input, heroesObj) {
        let [heroName, amountMP] = input
        amountMP = Number(amountMP);
        let manaRecharged = amountMP;
        let mp = heroesObj[heroName]["MP"] + amountMP;

        if (mp > 200) {
            manaRecharged = 200 - heroesObj[heroName]["MP"];
            heroesObj[heroName]["MP"] = 200;
        } else {
            heroesObj[heroName]["MP"] += amountMP;
        }
        console.log(`${heroName} recharged for ${manaRecharged} MP!`);
    }
    function heal(input, heroesObj) {
        let [heroName, amountHP] = input
        amountHP = Number(amountHP);
        let healthRecharged = amountHP;
        let hp = heroesObj[heroName]["HP"] + amountHP;

        if (hp > 100) {
            healthRecharged = 100 - heroesObj[heroName]["HP"];
            heroesObj[heroName]["HP"] = 100
        } else {
            heroesObj[heroName]["HP"] += amountHP;
        }
        console.log(`${heroName} healed for ${healthRecharged} HP!`);
    }

    function addHeroes(input, heroesObj) {
        let heroesCount = Number(input.shift());
        for (let i = 0; i < heroesCount; i++) {
            let [heroName, ...heroInfo] = input.shift().split(" ");
            let [heroHP, heroMP] = heroInfo.map(Number);
            heroesObj[heroName] = {
                "HP": (heroHP > 100) ? heroHP = 100 : heroHP,
                "MP": (heroMP > 200) ? heroMP = 200 : heroMP
            }
        }
    }
}
// hoCL([
//     '2',
//     'Solmyr 85 120',
//     'Kyrre 99 50',
//     'Heal - Solmyr - 10',
//     'Recharge - Solmyr - 50',
//     'TakeDamage - Kyrre - 66 - Orc',
//     'CastSpell - Kyrre - 15 - ViewEarth',
//     'End'])
hoCL([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'])