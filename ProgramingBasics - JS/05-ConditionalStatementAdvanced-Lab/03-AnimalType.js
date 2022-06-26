function animalType(dayInput){
    let dayNumber = dayInput;

    switch  (dayNumber){
        case "dog" : console.log("mammal"); break;
        case "snake" :
        case "Wednesday" :
        case "tortoise" : 
        case "crocodile" : console.log("reptile"); break;
        default: console.log("unknown"); break;
    }

}

AnimalType("dog");