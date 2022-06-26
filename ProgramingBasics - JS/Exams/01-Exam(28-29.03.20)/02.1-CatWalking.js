function catWalking(arg1,arg2,arg3){
    let walking = Number(arg1)*5;
    let walkingNums = Number(arg2);
    let caloriesEaten = Number(arg3);

    let caloriesBurnt = walking*walkingNums;

    if (caloriesBurnt>=((1/2)*caloriesEaten)){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurnt}.`);
    }else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurnt}.`);
    }

}
catWalking(30,3,600)