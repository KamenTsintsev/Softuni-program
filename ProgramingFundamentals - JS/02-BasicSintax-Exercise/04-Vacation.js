function solve(arg1, arg2, arg3) {
    let qty = Number(arg1);
    let type = arg2;
    let dayOfWeek = arg3;

    let totalPrice = 0

    switch (type) {
        case "Students":
            switch (dayOfWeek) {
                case "Friday":
                    totalPrice = qty * 8.45;
                    break;
                case "Saturday":
                    totalPrice = qty * 9.8;
                    break;
                case "Sunday":
                    totalPrice = qty * 10.46;
                    break;
            }
            if (qty >= 30) {
                totalPrice *= 0.85;
            }
            break;
        case "Business":
            if (qty >= 100) {
                qty -= 10
            }
            switch (dayOfWeek) {
                case "Friday":
                    totalPrice = qty * 10.9;
                    break;
                case "Saturday":
                    totalPrice = qty * 15.6;
                    break;
                case "Sunday":
                    totalPrice = qty * 16;
                    break;
            }
            break;
        case "Regular":
            switch (dayOfWeek) {
                case "Friday":
                    totalPrice = qty * 15;
                    break;
                case "Saturday":
                    totalPrice = qty * 20;
                    break;
                case "Sunday":
                    totalPrice = qty * 22.5;
                    break;
            }
            if (qty >= 10 && qty <= 20) {
                totalPrice *= 0.95;
            }
            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

solve(30, "Students", "Sunday")
solve(40, "Regular", "Saturday")