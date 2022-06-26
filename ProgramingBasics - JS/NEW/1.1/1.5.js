function solve(arr1) {
    let rent = Number(arr1)
    let cake = rent * 0.2
    let drinks = cake - cake * 0.45
    let animator = rent / 3

    let finalprice = rent + cake + drinks + animator
    console.log(finalprice.toFixed(1));
}

solve(2250)