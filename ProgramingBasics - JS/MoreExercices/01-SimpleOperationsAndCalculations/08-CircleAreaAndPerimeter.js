function circleAreaAndPerimeter(radiusInput) {
    let radius = Number(radiusInput);

    let circleArea = Math.PI * radius ** 2;
    let circlePerimeter = Math.PI * radius * 2;

    console.log(circleArea.toFixed(2));
    console.log(circlePerimeter.toFixed(2));

}

circleAreaAndPerimeter(3);