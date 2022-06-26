function solve(arg1, arg2) {
    for (let i = 0; i < arg1.length; i++) {
        arg1[i] = Number(arg1[i]);
    }

    for (let i = 0; i < arg2.length; i++) {
        arg2[i] = Number(arg2[i]);
    }
    let sum = 0
    let isEven = true;
    for (let i = 0; i < arg1.length; i++) {
        if (arg1[i] !== arg2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isEven = false;
            break;
        } else {
            sum += arg1[i];
        }

    }
    if (isEven) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
solve(['10', '20', '30'], ['10', '20', '30'])