function coins(sumInput) {
    let sum = Number(sumInput[0]);
    let counter = 0;

    while (sum  > 0) {
        if (sum >= 2) {
            sum -= 2;
            counter++;
            sum = Number(sum.toFixed(2));
        } else if (sum >= 1) {
            sum -= 1;
            counter++;
            sum = Number(sum.toFixed(2));
        } else if (sum >= 0.5) {
            sum -= 0.5;
            counter++;
            sum = Number(sum.toFixed(2));
        } else if (sum >= 0.2) {
            sum -= 0.2;
            counter++;
            sum = Number(sum.toFixed(2));
        } else if (sum >= 0.1) {
            sum -= 0.1;
            counter++;
            sum = Number(sum.toFixed(2));
        } else if (sum >= 0.05) {
            sum -= 0.05;
            counter++;
            sum = Number(sum.toFixed(2));
        } else if (sum >= 0.02) {
            sum -= 0.02;
            counter++;
            sum = Number(sum.toFixed(2));
        } else if(sum>=0.01){
            sum -= 0.01;
            counter++;
            sum = Number(sum.toFixed(2));
        }
        
    }
    console.log(counter);
}

// coins(["1.23"]);
// coins(["2"]);
// coins(["0.56"]);
coins(["2.73"]);