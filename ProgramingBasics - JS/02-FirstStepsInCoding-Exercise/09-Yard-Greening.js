function yardGreening(input) {
    let price = Number(input) * 7.61;
    let discount = price * 0.18;
    let totalPrice = price - discount;
    console.log(`The final price is ${totalPrice} lv.`);
    console.log(`The discount price is ${discount} lv.`);
}

yardGreening("150");