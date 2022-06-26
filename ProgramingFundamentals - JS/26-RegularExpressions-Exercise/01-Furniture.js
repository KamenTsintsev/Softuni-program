function furniture(input) {
    let regEx = />>(?<name>[A-Z]*(?:[a-z]+)?)<<(?<price>\d+(?:\.\d+)?)\!(?<qty>\d+)/;
    let storage = [];
    let sum = 0;
    while (input[0] !== "Purchase") {
        let line = input.shift();
        let product = regEx.exec(line);
        if (product !== null) {
            let name = product.groups["name"]
            let price = Number(product.groups["price"])
            let qty = Number(product.groups["qty"])
            storage.push(name)
            sum += price * qty
        }
    }
    // for (let line of input) {
    //     if (line !== "Purchases") {
    //         let match = regEx.exec(line)
    //         if (match !== null) {
    //             storage.push(match.groups["name"])
    //             let price = Number(match.groups["price"])
    //             let qty = Number(match.groups["qty"])
    //             sum += (price * qty)

    //         }
    //     }
    // }
    console.log("Bought furniture:");
    storage.forEach(fur => console.log(fur))
    console.log(`Total money spend: ${sum.toFixed(2)}`);
}
furniture([
    '>Invalid<<!5',
    'Purchase'])