function solve(a1, a2, a3) {
    let n1 = a1;
    let n2 = a2;
    let n3 = a3;

    if (n1 >= n2 && n1 >= n3) {
        console.log(n1);
    } else if (n2 >= n3 && n2 >= n1) {
        console.log(n2);
    } else if (n3 >= n2 && n3 >= n1) {
        console.log(n3);
    }

}
solve(2, 4, 4)