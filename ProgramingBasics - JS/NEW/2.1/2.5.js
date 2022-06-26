function solve(arr1, arr2) {
    let hours = Number(arr1);
    let minutes = Number(arr2) + hours * 60 + 15;

    hours = Math.floor(minutes / 60);
    minutes = minutes % 60;

    if (minutes <= 9) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}

solve(1, 50)