function supplies(arg1, arg2, arg3, arg4) {
    let pens = Number(arg1)*5.8;
    let markers = Number(arg2)*7.2;
    let preparat = Number(arg3)*1.2;

    let discount = 1-(Number(arg4)/100);

    let sum = (pens+markers+preparat)*discount;

    console.log(sum.toFixed(3));


}

supplies(2,3,2.5,25)