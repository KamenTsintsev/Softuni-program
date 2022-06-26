function phoneBook(arr) {

    let phoneBook = new Map();

    let addData = (input, map) => {
        for (const entry of input) {
            let [name, phoneNum] = entry.split(" ");
            map.set(name, phoneNum);
        }
        return map;
    }

    let printData = (map) => {
        for (const [name, phoneNum] of map) {
            console.log(`${name} -> ${phoneNum}`);
        }
    }

    addData(arr, phoneBook);
    printData(phoneBook);
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)