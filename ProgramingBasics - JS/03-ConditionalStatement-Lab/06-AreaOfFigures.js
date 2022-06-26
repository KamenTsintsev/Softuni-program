function areaOfFigures(figureInput, sizeAInput, sizeBInput) {
    let figure = figureInput;
    let sizeA = Number(sizeAInput);
    let sizeB = Number(sizeBInput);

    if (figure === "square") {
        let area = sizeA ** 2;
        console.log(area.toFixed(3));
    } else if (figure === "rectangle") {
        let area = sizeA * sizeB;
        console.log(area.toFixed(3));
    } else if (figure === "circle") {
        let area = Math.PI * (sizeA ** 2);
        console.log(area.toFixed(3));
    } else {
        let area = sizeA * sizeB / 2;
        console.log(area.toFixed(3));
    }

}

areaOfFigures("rectangle", "7", "2.5");