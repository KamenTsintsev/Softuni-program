function solve(arg1, arg2) {
    let num1 = Number(arg1);
    let num2 = Number(arg2);

    let sum = 0;
    let print = ""

    for (let i = num1; i <= num2; i++) {

        print += `${i} `;
        sum += i;

    }

    console.log(print);
    console.log(`Sum: ${sum}`);

}

solve(5, 10)
solve(0, 26)
solve(50, 60)