function solve(arg1, arg2, arg3, arg4, arg5) {
    let pagePr = Number(arg1);
    let coverPr = Number(arg2);
    let discount = 1 - Number(arg3) / 100;
    let designPr = Number(arg4);
    let teamHelp = 1 - Number(arg5) / 100;

    let sum = pagePr * 899 + coverPr * 2;

    sum *= discount;
    sum += designPr;
    sum *= teamHelp;

    console.log(`Avtonom should pay ${sum.toFixed(2)} BGN.`);

}
solve(0.01, 1, 10, 20, 20)