function addAndSubtract(num1, num2, num3) {
    function sum(num1, num2) {
        return num1 + num2
    }
    function subtract(sum, num3) {
        return sum - num3
    }
    function print(result) {
        console.log(result);
    }

    print(subtract(sum(num1, num2), num3));

}

addAndSubtract(16, 13, 10)


