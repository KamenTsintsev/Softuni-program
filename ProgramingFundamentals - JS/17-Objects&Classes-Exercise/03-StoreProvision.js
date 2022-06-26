function storeProvision(stockInput, orderInput) {
    let stock = {};

    for (let i = 0; i < stockInput.length; i += 2) {
        let name = stockInput[i];
        let qty = Number(stockInput[i + 1]);

        stock[name] = qty;
    }

    for (let i = 0; i < orderInput.length; i += 2) {
        let name = orderInput[i];
        let qty = Number(orderInput[i + 1]);

        if (!stock.hasOwnProperty(name)) {
            stock[name] = qty;
        } else {
            stock[name] += qty;
        }
    }

    let entries = Object.entries(stock);
    for (const [product, qty] of entries) {
        console.log(`${product} -> ${qty}`);
    }
}
storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])