function solve(arr1, arr2, arr3, arr4) {
    let length = Number(arr1) / 10
    let width = Number(arr2) / 10
    let height = Number(arr3) / 10
    let percent = Number(arr4) / 100

    let water = (length * width * height) - (length * width * height) * percent

    console.log(water)

}

solve("85", "75", "47", "17")
