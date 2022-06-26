function solve(arg1, arg2) {
    let base = Number(arg1);
    let increment = Number(arg2);

    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;

    let totalHeigh = 0;

    let floor = 1;

    for (let i = base; i > 0; i -= 2) {
        let currentStep = i * i;

        if (i === 1 || i === 2) {
            gold += currentStep;
        } else {
            let flStone = (i - 2) ** 2;
            stone += flStone;
            if (floor % 5 === 0) {
                lapisLazuli += currentStep - flStone;
            } else {
                marble += currentStep - flStone;
            }
        }

        floor++;
    }

    stone = Math.ceil(increment * stone);
    marble = Math.ceil(increment * marble);
    lapisLazuli = Math.ceil(increment * lapisLazuli);
    gold = Math.ceil(increment * gold);




    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapisLazuli}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${Math.floor(increment * (floor - 1))}`);
}

// solve(11, 1)
solve(11, 0.75)