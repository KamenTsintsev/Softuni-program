function numbersDivisibleBy9(num1Input,num2Input) {
    let num1 = Number(num1Input);
    let num2 = Number(num2Input);
    let res = 0;

    for (let i = num1; i < num2; i++) {
        if (i%9===0) {
           res += i;           
        } 
    }

    console.log(`The sum: ${res}`);

    for (let i = num1; i < num2; i++) {
        if (i%9===0) {           
           console.log(i);
        } 
    }
   
}

numbersDivisibleBy9("100", "200");