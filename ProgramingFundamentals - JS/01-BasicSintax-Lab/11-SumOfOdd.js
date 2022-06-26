function solve(arr1) {
    let num = Number(arr1);

    let currentNum = 1

    let sum = 0;

    for (let i = 1; i <= num; i++) {
        console.log(currentNum);
        sum += currentNum;
        currentNum += 2;
    }
    console.log(`Sum: ${sum}`);
}