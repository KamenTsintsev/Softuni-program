function printResult(num1, num2) {
    let factorial1 = factorialCalc(num1);
    let factorial2 = factorialCalc(num2);
    function factorialCalc(num) {
        let sum = 1;
        for (let i = 1; i <= num; i++) {
            sum *= i;
        }
        return sum;
    }
    let division = (n1, n2) => { return (n1 / n2).toFixed(2) };
    console.log(division(factorial1, factorial2));
}

printResult(6, 2)