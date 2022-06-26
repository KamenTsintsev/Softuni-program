function solve(arr1) {
    let points = Number(arr1)

    let bonusPts = 0.0

    if (points <= 100) {
        bonusPts += 5
    } else if (points > 100 && points <= 1000) {
        bonusPts = points * 0.2
    } else {
        bonusPts = points * 0.1
    }

    if (points % 2 == 0) {
        bonusPts += 1
    } else if (points % 10 == 5) {
        bonusPts += 2
    }

    let totalPts = points + bonusPts

    console.log(bonusPts);
    console.log(totalPts);
}

solve(15875)