class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.addProduct = (obj) => {
            this.capacity -= obj.quantity;
            this.storage.push(obj);
        };
        this.getProducts = () => {
            let output = [];
            this.storage.forEach((obj) => {
                output.push(JSON.stringify(obj));
            })
            return output.join('\n');
        };
    };
    get totalCost() {
        return this.storage.reduce((acc, obj) => {
            return acc + (obj.price * obj.quantity);
        }, 0)
    }
}

let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();
console.log(storage.totalCost);
console.log(storage.capacity);

// { "name": "Cucamber", "price": 1.5, "quantity": 15 }
// { "name": "Tomato", "price": 0.9, "quantity": 25 }
// { "name": "Bread", "price": 1.1, "quantity": 8 }