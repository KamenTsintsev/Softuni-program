function solve(arg1) {
    let yeild = arg1;

    let days = 0;
    let income = 0;

    while (yeild >= 100) {
        income += yeild;
        income -= 26;

        days++;
        yeild -= 10;
    }

    if (income >= 26) {
        income -= 26;
    } else {
        income = 0;
    }

    console.log(days);
    console.log(income);
}
solve(450);