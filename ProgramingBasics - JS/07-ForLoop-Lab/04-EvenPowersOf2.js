function evenPoweredOf2(numInput) {
    let num = Number(numInput);

    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(2 ** i);
        }
    }
}

evenPoweredOf2(7);