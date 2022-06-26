function zooShop(dogs, otherPets) {
    let dogFood = Number(dogs) * 2.5 ;
    let otherFood = Number(otherPets) * 4;
    let allFood = dogFood + otherFood;
    console.log (`${allFood} лв.`);
}

zooShop("5", "4");