function solve(arg1, arg2) {
    let r = arg1;
    let h = arg2;

    const pi = Math.PI


    let volume = ((1 / 3) * h * (r ** 2) * pi);

    let l = Math.sqrt(r ** 2 + h ** 2);
    let area = pi * (r ** 2) + pi * r * l

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);

}
solve(3, 5)