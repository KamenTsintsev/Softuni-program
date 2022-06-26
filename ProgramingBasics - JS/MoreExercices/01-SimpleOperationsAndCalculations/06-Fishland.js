function fishland(skumriqPriceInput, cacaPriceInput, palamudKgInput, safridKgInput, midiKgInput) {
    let palamudKg = Number(palamudKgInput);
    let safridKg = Number(safridKgInput);
    let midiKg = Number(midiKgInput);

    let skumriqPrice = Number(skumriqPriceInput);
    let cacaPrice = Number(cacaPriceInput);
    let palamudPrice = (skumriqPrice + skumriqPrice * 0.6) * palamudKg;
    let safridPrice = (cacaPrice + cacaPrice * 0.8) * safridKg;
    let midiPrice = midiKgInput * 7.5;

    let finalPrice = palamudPrice + safridPrice + midiPrice;

    console.log(finalPrice.toFixed(2));
}

fishland(6.90, 4.20, 1.5, 2.5, 1)