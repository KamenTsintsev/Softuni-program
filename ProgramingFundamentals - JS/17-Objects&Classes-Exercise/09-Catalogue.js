function catalogue(input) {
    let catalogue = [];

    for (let item of input) {
        let name = item.split(" : ")[0];
        let price = Number(item.split(" : ")[1]);

        let product = {
            name,
            price
        }
        catalogue.push(product)
    }

    catalogue.sort((a, b) => {
        return a.name.localeCompare(b.name)
    })
    let init = "";
    let initCount = 0
    for (const item of catalogue) {
        let currentInit = item.name[0].toUpperCase();
        if (init === currentInit) {
            if (initCount === 0) {
                console.log(init);
            }
            console.log(`  ${item.name}: ${item.price}`);
            initCount++;
        } else {
            init = currentInit;
            console.log(init);
            console.log(`  ${item.name}: ${item.price}`);
            initCount = 1;
        }
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])