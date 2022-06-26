function solve(arr1, arr2, arr3) {
    let record = Number(arr1)
    let distance = Number(arr2)
    let mps = Number(arr3)

    let time = distance * mps
    let resistance = Math.floor(distance / 15 * 12.5)
    let finalTime = time + resistance

    if (finalTime <= record) {
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`);
    } else if (finalTime > record) {
        console.log(`No, he failed! He was ${(finalTime - record).toFixed(2)} seconds slower.`);
    }

}

solve("10464", "1500", "20")
