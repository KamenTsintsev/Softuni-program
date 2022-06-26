function smallestNum(num1, num2, num3) {
    let smallest = 0;

    if (num1 <= num2 && num1 <= num3) {
        smallest = num1;
    } else if (num2 <= num1 && num2 <= num3) {
        smallest = num2;
    } else if (num3 <= num2 && num3 <= num1) {
        smallest = num3;
    }
    print(smallest);
    function print(num) {
        console.log(num);
    }

}

smallestNum(600, 342, 123)