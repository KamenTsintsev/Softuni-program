function depositCalculator(depositInput, periodInput, percentageInput) {
    let deposit = Number(depositInput);
    let period = Number(periodInput);
    let percentage = Number(percentageInput) / 100;

    let result = deposit + period * ((deposit * percentage) / 12)

    console.log(result);

}

depositCalculator("2350", "6", "7");