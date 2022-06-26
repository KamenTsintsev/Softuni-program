// function solve(arg1) {
//     console.log(arg1.reverse().join(" "));
// }
function solve(arg1) {
    for (let i = 0; i < Math.floor(arg1.length / 2); i++) {
        let buffer = arg1[i];
        arg1[i] = arg1[arg1.length - 1 - i];
        arg1[arg1.length - 1 - i] = buffer
    }

    console.log(arg1.join(" "));

}
solve(['a', 'b', 'c', 'd', 'e'])