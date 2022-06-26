function metricConverter(numInput, fromUnitInput, toUnitInput) {
    let num = Number(numInput);
    let fromUnit = fromUnitInput;
    let toUnit = toUnitInput;


    // if (fromUnit === "mm") {
    //     if (toUnit === "cm") {
    //         num = num / 10;
    //         console.log(num);
    //     } else if (toUnit === "m") {
    //         num = num / 1000;
    //         console.log(num);
    //     }
    // } else if (fromUnit === "cm") {
    //     if (toUnit === "mm") {
    //         num = num * 10;
    //         console.log(num);
    //     } else if (toUnit === "m") {
    //         num = num / 100;
    //         console.log(num);
    //     }
    // } else if (fromUnit === "m") {
    //     if (toUnit === "mm") {
    //         num = num * 1000;
    //         console.log(num);
    //     } else if (toUnit === "cm") {
    //         num = num * 100;
    //         console.log(num);
    //     }
    // }

    if (fromUnit === "mm" && toUnit === "cm") {
        num = num / 10;
        console.log(num.toFixed(3));
    } else if (fromUnit === "mm" && toUnit === "m") {
        num = num / 1000;
        console.log(num.toFixed(3));
    } else if (fromUnit === "cm" && toUnit === "mm") {
        num = num * 10;
        console.log(num.toFixed(3));
    } else if (fromUnit === "cm" && toUnit === "m") {
        num = num / 100;
        console.log(num.toFixed(3));
    } else if (fromUnit === "m" && toUnit === "mm") {
        num = num * 1000;
        console.log(num.toFixed(3));
    } else if (fromUnit === "m" && toUnit === "cm") {
        num = num * 100;
        console.log(num.toFixed(3));
    }

}

metricConverter("150", "m", "cm");