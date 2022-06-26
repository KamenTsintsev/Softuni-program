function radiansToDegreesConvertor(radiansInput) {
    let radians = Number(radiansInput);
    let degrees = (radians * 180) / Math.PI;

    console.log(degrees.toFixed(0));
}

radiansToDegreesConvertor("3.1415");