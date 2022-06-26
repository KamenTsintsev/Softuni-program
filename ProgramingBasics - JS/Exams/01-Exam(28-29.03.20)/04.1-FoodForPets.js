function foodForPets(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let avFood = Number(input[index]);
    index++;

    let counter = 0;

    let allDog = 0;
    let allCat = 0;
    let bisquits = 0;

    for (let i = 0; i < days; i++) {
        counter++

        let dogFood = Number(input[index]);
        let catFood = Number(input[index + 1]);


        allDog += dogFood;
        allCat += catFood;

        if (counter % 3 === 0) {
            bisquits += (dogFood + catFood) * 0.1;
        }



        index += 2;
    }

    let foodEaten = (allDog + allCat);
    let fEatedPerc = foodEaten / avFood * 100;

    console.log(`Total eaten biscuits: ${Math.round(bisquits)}gr.`);
    console.log(`${fEatedPerc.toFixed(2)}% of the food has been eaten.`);
    console.log(`${(allDog / foodEaten * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${(allCat / foodEaten * 100).toFixed(2)}% eaten from the cat.`);
}
foodForPets([
    '3',   '500',
    '100', '30',
    '110', '25',
    '120', '35'
  ]);
// foodForPets([
//     '3',   '1000',
//     '300', '20',
//     '100', '30',
//     '110', '40'
//   ])