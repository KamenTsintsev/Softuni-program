function barIncome(input) {

    let pattern = /%(?<name>[A-Z][a-z]+)%.*?<(?<product>\w+)>.*?\|(?<qty>\d+)\|.*?(?<price>\d+(?:\.+\d+)*)\$/;
    let totalIncome = 0

    while (input[0] !== "end of shift") {
        let line = input.shift();
        let match = pattern.exec(line);
        if (match !== null) {
            let name = match.groups["name"]
            let product = match.groups["product"]
            let qty = Number(match.groups["qty"])
            let price = Number(match.groups["price"])
            let currPrice = qty * price
            console.log(`${name}: ${product} - ${currPrice.toFixed(2)}`);
            totalIncome += currPrice
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
barIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])