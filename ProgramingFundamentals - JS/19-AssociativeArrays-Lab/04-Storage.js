function storage(input) {

    let storage = {};

    let addProducts = (products, storage) => {
        for (const entry of products) {
            let [name, qty] = entry.split(" ");
            if (storage.hasOwnProperty(name)) {
                storage[name] += Number(qty)
            } else {
                storage[name] = Number(qty)
            }
        }
    }
    let printInfo = (storage) => {
        for (let key in storage) {
            console.log(`${key} -> ${storage[key]}`);
        }
    }

    addProducts(input, storage)
    printInfo(storage)
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])
