function orders(order, qty) {
    let sum = 0;
    switch (order) {
        case "coffee":
            print(qty * 1.5)
            break;
        case "water":
            print(qty * 1.00)
            break;
        case "coke":
            print(qty * 1.40)
            break;
        case "snacks":
            print(qty * 2.00)
            break;
    }

    function print(num) {
        console.log(num.toFixed(2));
    }
}

orders("coffee", 2)