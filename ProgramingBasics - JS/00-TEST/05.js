function solve(input) {
    let index = 0;
    let command = input[index];

    let kids = 0;
    let adults = 0;
    let kidsPr = 0;
    let adultsPr = 0;

    let sum = 0;

    while (command !== "Christmas") {
        command = Number(input[index]);

        if (command <= 16) {
            kids++;
        } else {
            adults++;
        }

        index++;
        command = input[index];
    }

    kidsPr = kids * 5;
    adultsPr = adults * 15;

    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${kidsPr}`);
    console.log(`Money for sweaters: ${adultsPr}`);
}
solve(['16', '20', '46', '12', '8', '20', '49', 'Christmas']);