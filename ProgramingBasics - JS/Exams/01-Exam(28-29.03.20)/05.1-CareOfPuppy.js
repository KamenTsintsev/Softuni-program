function careOfPuppy(input){
    let index = 0;
    let avFood = Number(input[index])*1000;
    index++;
    let command = input[index];

    while(command !== "Adopted"){
        command = Number(command);

        avFood-=command;

        index++;
        command = input[index];
    }

    if(avFood>=0){
        console.log(`Food is enough! Leftovers: ${avFood} grams.`);
    }else{
        console.log(`Food is not enough. You need ${Math.abs(avFood)} grams more.`);
    }

    

}
careOfPuppy([
    '4',   '130',
    '345', '400',
    '180', '230',
    '120', 'Adopted'
  ]);
careOfPuppy([ '3', '1100', '1000', '1000', 'Adopted' ]);