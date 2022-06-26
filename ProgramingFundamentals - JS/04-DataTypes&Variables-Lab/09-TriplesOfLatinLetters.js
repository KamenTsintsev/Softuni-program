function solve(arg1) {
    let num = arg1;

    for (let x = 0; x < num; x++) {

        let letter1 = String.fromCharCode(97 + x);
        for (let y = 0; y < num; y++) {
            let letter2 = String.fromCharCode(97 + y);
            for (let z = 0; z < num; z++) {
                let letter3 = String.fromCharCode(97 + z);
                console.log(`${letter1}${letter2}${letter3}`);
            }
        }
    }
}

solve(3)