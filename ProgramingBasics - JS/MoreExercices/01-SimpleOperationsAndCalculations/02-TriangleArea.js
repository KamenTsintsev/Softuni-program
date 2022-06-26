function triangleArea(aInput, hInput) {
    let a = Number(aInput);
    let h = Number(hInput);

    let area = a * h / 2;

    console.log(area.toFixed(2));
}

triangleArea(20, 30);