function solve(arr1) {
    let change = Number(arr1[0]);
    let coins = 0;

    while (change > 0) {
        if (change >= 2) {
            change -= 2;
            coins++;
            change = Number(change.toFixed(2));
        } else if (change >= 1) {
            change -= 1;
            coins++;
            change = Number(change.toFixed(2));
        } else if (change >= 1) {
            change -= 1;
            coins++;
            change = Number(change.toFixed(2));
        } else if (change >= 0.5) {
            change -= 0.5;
            coins++;
            change = Number(change.toFixed(2));
        } else if (change >= 0.2) {
            change -= 0.2;
            coins++;
            change = Number(change.toFixed(2));
        } else if (change >= 0.1) {
            change -= 0.1;
            coins++;
            change = Number(change.toFixed(2));
        } else if (change >= 0.05) {
            change -= 0.05;
            coins++;
            change = Number(change.toFixed(2));
        } else if (change >= 0.02) {
            change -= 0.02;
            coins++;
            change = Number(change.toFixed(2));
        } else if (change >= 0.01) {
            change -= 0.01;
            coins++;
            change = Number(change.toFixed(2));
        }
    }

    console.log(coins);
}
// solve(["1.23"]);
// solve(["2"]);
// solve(["0.56"]);
solve(["2.73"]);