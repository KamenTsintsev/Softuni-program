function solve(arg1) {
    let num = Number(arg1);

    for (let i = 1; i <= num; i++) {
        let print = ""

        for (let j = 1; j <= i; j++) {

            print += `${i} `

        }
        console.log(print);

        // OR console.log(`${i} `.repeat(i));
    }
}