function towns(arr) {
    for (let townData of arr) {

        let town = {
            town: townData.split(" | ")[0],
            latitude: Number(townData.split(" | ")[1]).toFixed(2),
            longitude: Number(townData.split(" | ")[2]).toFixed(2)
        }
        console.log(town);

    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])