function trapezoidArea(b1Input, b2Input, hInput) {
    let b1 = Number(b1Input);
    let b2 = Number(b2Input);
    let h = Number(hInput);

    let area = (b1 + b2) * h / 2;

    console.log(area.toFixed(2));
}

trapezoidArea(8, 13, 7);