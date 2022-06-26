function solve(arg1, arg2, arg3, arg4, arg5) {
    let lostFights = arg1;
    let helmetPR = arg2;
    let swordPr = arg3;
    let shieldPR = arg4;
    let armorPr = arg5;

    let trHelmet = 0;
    let trSword = 0;
    let trShield = 0;
    let trArmor = 0;

    let totalSum = 0

    if (lostFights >= 12) {
        trArmor = Math.floor(lostFights / 12);
        totalSum += trArmor * armorPr;
    }
    if (lostFights >= 6) {
        trShield = Math.floor(lostFights / 6);
        totalSum += trShield * shieldPR;
    }
    if (lostFights >= 3) {
        trSword = Math.floor(lostFights / 3);
        totalSum += trSword * swordPr;
    }
    if (lostFights >= 2) {
        trHelmet = Math.floor(lostFights / 2);
        totalSum += trHelmet * helmetPR;
    }

    console.log(`Gladiator expenses: ${(totalSum).toFixed(2)} aureus`);

}
solve(7, 2, 3, 4, 5)