function solve(arg1, arg2, arg3) {
    let res = arg1.replace('_', arg2);

    let print = res === arg3 ? "Matched" : "Not Matched";
    console.log(print);

}
solve('Str_ng', 'i', 'String')