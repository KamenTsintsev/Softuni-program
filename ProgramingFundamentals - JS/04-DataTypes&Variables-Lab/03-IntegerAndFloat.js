function solve(arg1, arg2, arg3) {
    let sum = arg1 + arg2 + arg3;

    sum % 1 === 0 ? sum += " - Integer" : sum += " - Float"

    console.log(sum);

}