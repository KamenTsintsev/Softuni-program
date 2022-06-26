function solve(arg1) {
    while (arg1.length > 1) {
        let newArr = []
        for (let i = 0; i < arg1.length - 1; i++) {
            let num1 = arg1[i];
            let num2 = arg1[i + 1];
            let sum = num1 + num2;
            newArr.push(sum);
        }
        arg1 = newArr
        newArr = []
    }
    console.log(arg1.toString());

}
solve([2, 10, 3])