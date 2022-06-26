function changeBureau(arg1,arg2,arg3){
    let bitcoin = Number(arg1)*1168;
    let chYuan = Number(arg2)*0.15;
    let dollar = chYuan*1.76;

    let commission = 1-((arg3)/100);

    // console.log(commission);

    let sum = (bitcoin + dollar)/1.95;

    let sumTotal = sum*commission;

    console.log(sumTotal.toFixed(2));
}
changeBureau(1, 5, 5)