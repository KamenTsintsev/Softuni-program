function celsiusToFahrenheit(CelsiusInput) {
    let celsius = Number(CelsiusInput);
 
    let fahrenheit = celsius*1.8+32;

    console.log(fahrenheit.toFixed(2));
}

celsiusToFahrenheit("25")