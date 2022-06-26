function solve(arr1, arr2) {
    let leapYear = Number(arr1);
    let endYear = Number(arr2);

    for (let i = leapYear; i <= endYear; i += 4) {
        console.log(i);
    }
}
solve("2000", "2011")