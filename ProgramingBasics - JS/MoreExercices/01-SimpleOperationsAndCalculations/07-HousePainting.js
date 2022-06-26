function housePainting(houseHeightInput, houseWitdhtInput, roofHeightInput) {
    let houseHeight = Number(houseHeightInput);
    let houseWitdht = Number(houseWitdhtInput);
    let roofHeight = Number(roofHeightInput);

    let houseFrontArea = (houseHeightInput) ** 2;
    let houseSideArea = houseHeight * houseWitdht;
    let roofTriangleArea = houseHeight * roofHeight / 2

    let greenPaint = ((2 * houseFrontArea - 2 * 1.2) + (2 * (houseSideArea - 2.25)))/3.4;
    let redPaint = (2*houseSideArea + 2*roofTriangleArea)/4.3;

        console.log(greenPaint.toFixed(2));
        console.log(redPaint.toFixed(2));
}

housePainting(6, 10, 5.2);