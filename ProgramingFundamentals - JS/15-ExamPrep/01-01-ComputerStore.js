function computerStore(arr) {
    let priceCalc = array => {
        let sum = 0
        for (let i = 0; i < array.length; i++) {
            if (!(array[i] === "regular" || array[i] === "special")) {
                let num = Number(array[i])
                if (num >= 0) {
                    sum += num;
                } else {
                    console.log("Invalid price!");
                }
            }
        }
        return sum;
    }

    let price = priceCalc(arr);

    let tax = price * 0.2;
    let totalPrice = price + tax;

    let client = arr[arr.length - 1]
    if (client === "special") {
        totalPrice *= 0.9;
    }

    if (totalPrice === 0) {
        console.log("Invalid order!");
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${price.toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }


}
// computerStore([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'])

computerStore([
    'regular'])