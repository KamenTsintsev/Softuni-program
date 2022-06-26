function inventory(input) {

    let heroes = []

    for (let line of input) {
        let [name, lvl, inventory] = line.split(" / ")

        inventory = inventory
            .split(", ")
            .sort((a, b) => {
                return a.localeCompare(b);
            })
            .join(", ")

        let hero = {
            name,
            lvl,
            inventory
        }
        heroes.push(hero);
    }

    heroes = heroes.sort((a, b) => {
        return a.lvl - b.lvl;
    })
    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.lvl}`);
        console.log(`items => ${hero.inventory}`);
    })
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)