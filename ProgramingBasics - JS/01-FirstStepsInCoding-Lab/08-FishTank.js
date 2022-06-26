function fishTank(lengthInput, widthInput, heightInput, decorationAmtPercentageInput) {
    let length = Number(lengthInput) / 10;
    let width = Number(widthInput) / 10;
    let height = Number(heightInput) / 10;
    let decorationAmtPercentage = Number(decorationAmtPercentageInput) / 100;

    let volume = length * width * height;
    let litersNeeded = volume * (1 - decorationAmtPercentage);

    console.log(litersNeeded);

}

fishTank("105", "77", "89", "18.5");