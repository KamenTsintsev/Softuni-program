function moving(spaceInput){
    let index = 0;
    let width = Number(spaceInput[index]);
    index++;
    let length = Number(spaceInput[index]);
    index++;
    let height = Number(spaceInput[index]);
    index++;

    let aptVolume = width*length*height;
    let spaceNeeded = 0;

    while (spaceInput[index]!="Done"){
        spaceNeeded+= Number(spaceInput[index]);

        if (spaceNeeded>aptVolume){
            break;
        }
        index++;
    }

    if (spaceNeeded>aptVolume){
        spaceNeeded-=aptVolume;
        console.log(`No more free space! You need ${spaceNeeded} Cubic meters more.`);
    }else{
        spaceNeeded-=aptVolume;
        console.log(`${Math.abs(spaceNeeded)} Cubic meters left.`);
    }
}
moving(["10",
"1",
"2",
"4",
"6",
"Done"]);