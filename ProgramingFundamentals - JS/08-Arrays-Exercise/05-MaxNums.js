function solve(arr1) {
    let print = "";
    for (let i = 0; i < arr1.length; i++) {
        let currentNum = arr1[i];
        let isBigger = true;
        for (let j = i + 1; j < arr1.length; j++) {
            let nextNum = arr1[j];

            if (currentNum < nextNum || currentNum === nextNum) {
                isBigger = false;

            }
        }
        if (isBigger) {
            print += `${arr1[i]} `
        }
    }
    console.log(print);
}
solve([41, 41, 34, 20])