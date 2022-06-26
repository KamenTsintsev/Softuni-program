function solve(input) {
    let index = 0;
    let locationsNum = Number(input[index]);
    index++;

    for (let i = 0; i < locationsNum; i++) {
        let expGpD = Number(input[index]);
        index++;
        let days = Number(input[index]);
        index++;

        let sum = 0;

        for (let j = 0; j < days; j++) {
            let currentG = Number(input[index]);

            sum += currentG;


            index++;
        }

        sum /=days;

        if (sum >= expGpD) {
            console.log(`Good job! Average gold per day: ${sum.toFixed(2)}.`);
        } else {
            sum = expGpD - sum
            console.log(`You need ${sum.toFixed(2)} gold.`);
        }        
    }
}
solve([
    '2', '10', '3',
    '10', '10', '11',
    '20', '2', '20',
    '10'
]);