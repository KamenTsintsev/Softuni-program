function powered(num, power) {
    let sum = 1;
    for (let i = 0; i < power; i++) {
        sum *= num;
    }
    console.log(sum);
}

powered(2, 8);