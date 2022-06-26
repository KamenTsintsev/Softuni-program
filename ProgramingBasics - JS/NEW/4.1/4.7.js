function solve(arr1) {
    let qty = Number(arr1[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 1; i < arr1.length; i++) {

        let element = Number(arr1[i]);

        if (arr1[i] % 2 === 0) {
            p1++;
        }
        if (arr1[i] % 3 === 0) {
            p2++;
        }
        if (arr1[i] % 4 === 0) {
            p3++;
        }
    }

    console.log(`${(p1 / qty * 100).toFixed(2)}%`);
    console.log(`${(p2 / qty * 100).toFixed(2)}%`);
    console.log(`${(p3 / qty * 100).toFixed(2)}%`);

}

solve(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"])
