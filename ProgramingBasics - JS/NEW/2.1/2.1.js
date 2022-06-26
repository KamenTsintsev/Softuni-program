function solve(arr1, arr2, arr3) {
    let totalTime = Number(arr1) + Number(arr2) + Number(arr3)

    let minutes = Math.floor(totalTime / 60)
    let seconds = totalTime % 60

    if (seconds <= 9) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

solve("35", "45", "44")