function fancyBarcode(input) {
    count = input.shift();
    let barcodePattern = /(@#+)([A-Z](?:[a-zA-Z\d]{4,})[A-Z])(@#+)/;
    let digitPattern = /\d/g;

    for (let i = 0; i < count; i++) {
        let match = input[i].match(barcodePattern)
        if (match !== null) {
            hasMatch(match[0], digitPattern)
        } else {
            console.log("Invalid barcode");
        }
    }
    function hasMatch(input, regex) {
        let group = input.match(regex)
        if (group !== null) {
            group = group.join("")
        } else {
            group = "00"
        }
        console.log(`Product group: ${group}`);
    }
}
fancyBarcode(["6",
    "@###Val1d1teM@###",
    "@#ValiditeM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);
// fancyBarcode(["5",
//     "@#FreshFisH@#", "@#FreshFisH@#", "@#FreshFisH@#", "@#FreshFisH@#", "@#FreshFisH@#", "@#FreshFisH@#", "@#FreshFisH@#", "@#FreshFisH@#", "@#FreshFisH@#",])
