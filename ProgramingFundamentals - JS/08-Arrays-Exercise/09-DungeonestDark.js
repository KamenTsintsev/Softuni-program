function solve(arr) {
    let dungeon = arr[0].split("|");
    let hp = 100;
    let coins = 0;
    let room = 1;

    let isDead = false;

    for (let i = 0; i < dungeon.length; i++) {
        let currentEl = dungeon[i];
        let action = currentEl.split(" ")[0];
        let amount = Number(currentEl.split(" ")[1]);

        if (action === "potion") {
            let hpGain = amount;
            hp += hpGain;
            let heal = hpGain;

            if (hp > 100) {
                let excessHeal = hp - 100;
                heal -= excessHeal;
                hp = 100
            }
            console.log(`You healed for ${heal} hp.`);
            console.log(`Current health: ${hp} hp.`);
        } else if (action === "chest") {
            let coinGain = amount;
            coins += coinGain;
            console.log(`You found ${coinGain} coins.`);
        } else {
            let damage = amount;
            hp -= damage;
            if (hp <= 0) {
                console.log(`You died! Killed by ${action}.`);
                console.log(`Best room: ${room}`);
                isDead = true;
                break;
            } else {
                console.log(`You slayed ${action}.`);
            }
        }
        room++;
    }
    if (!isDead) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${hp}`);
    }
}

solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])