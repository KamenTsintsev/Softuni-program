function solve(arg1, arg2, arg3) {
    let n1 = Number(arg1);
    let n2 = Number(arg2);
    let n3 = Number(arg3);

    if (n1 > n2 && n1 > n3) {
        if (n2 > n3) {
            console.log(n1);
            console.log(n2);
            console.log(n3);
        } else {
            console.log(n1);
            console.log(n3);
            console.log(n2);

        }
    } else if (n2 > n3 && n2 > n1) {
        if (n3 > n1) {
            console.log(n2);
            console.log(n3);
            console.log(n1);
        } else {
            console.log(n2);
            console.log(n1);
            console.log(n3);

        }
    } else if (n3 > n2 && n3 > n1) {
        if (n2 > n1) {
            console.log(n3);
            console.log(n2);
            console.log(n1);
        } else {
            console.log(n3);
            console.log(n1);
            console.log(n2);

        }
    }

}

solve(2, 1465, 3);