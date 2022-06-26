function solve(arr1) {
    let qty = Number(arr1[0]);


    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i < arr1.length; i++) {

        if (arr1[i] < 200) {
            p1++;
        } else if (arr1[i] < 400) {
            p2++;
        } else if (arr1[i] < 600) {
            p3++;
        } else if (arr1[i] < 800) {
            p4++;
        } else {
            p5++;
        }
    }

    console.log(`${(p1 / qty * 100).toFixed(2)}%`);
    console.log(`${(p2 / qty * 100).toFixed(2)}%`);
    console.log(`${(p3 / qty * 100).toFixed(2)}%`);
    console.log(`${(p4 / qty * 100).toFixed(2)}%`);
    console.log(`${(p5 / qty * 100).toFixed(2)}%`);

}

solve(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"]);
