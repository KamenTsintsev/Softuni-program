function solve(arr1, arr2, arr3, arr4, arr5) {
    let days = Number(arr1)
    let confectioner = Number(arr2)
    let cakes = Number(arr3) * 45
    let waffles = Number(arr4) * 5.8
    let pancakes = Number(arr5) * 3.2

    let finalSum = ((confectioner * (cakes + waffles + pancakes)) * days) * (7 / 8)

    console.log(finalSum.toFixed(2));

}

solve("131", "5", "9", "33", "46")
