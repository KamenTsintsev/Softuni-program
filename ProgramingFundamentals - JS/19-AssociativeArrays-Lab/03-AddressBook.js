function addressBook(input) {

    let addressBook = new Map();

    let addData = (input, addressBook) => {
        for (const entry of input) {
            let [name, address] = entry.split(":");
            addressBook.set(name, address);
        }
    }
    let printData = (addressBook) => {
        let addressKeys = Array.from(addressBook.keys()).sort((a, b) => a.localeCompare(b));
        for (let key of addressKeys) {
            console.log(`${key} -> ${addressBook.get(key)}`);
        }
    }

    addData(input, addressBook)
    printData(addressBook)
}
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'])