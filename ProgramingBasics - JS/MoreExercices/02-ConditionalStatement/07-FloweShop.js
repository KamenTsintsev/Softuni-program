function flowerShop(magnoliaInput, hyacinthsInput, rosesInput, cactusInput, giftPriceInput) {
    let magnolia = Number(magnoliaInput)*3.25;
    let hyacinths = Number(hyacinthsInput)*4;
    let roses = Number(rosesInput)*3.5;
    let cactus = Number(cactusInput)*8;
    let giftPrice = Number(giftPriceInput);

    let sumTotal = (magnolia+hyacinths+roses+cactus)*0.95;

    if (sumTotal >= giftPrice) {
        let leftMoney = Math.floor(sumTotal-giftPrice);
        console.log(`She is left with ${leftMoney} leva.`);
    } else {
        let moneyNeeded = Math.ceil(giftPrice-sumTotal);
        console.log(`She will have to borrow ${moneyNeeded} leva.`);
    }

}

flowerShop(15,7,5,10,100);