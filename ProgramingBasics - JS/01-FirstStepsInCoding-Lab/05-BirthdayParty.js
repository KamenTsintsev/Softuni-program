function birthdayParty(rentInput) {
    let rent = Number(rentInput);
    let cakePrice = rent * 0.2;
    let drinksPrice = cakePrice - cakePrice * 0.45;
    let animatorPrice = rent / 3;

    let totalPrice = rent + cakePrice + drinksPrice + animatorPrice;

    console.log(totalPrice);

}

birthdayParty("3720");