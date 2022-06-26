function neighborhoods(input) {

    let neighborhoods = {};
    input.shift().split(", ")
        .forEach(x => neighborhoods[x] = []);

    let distribution = (input, neighborhoods) => {
        for (const entry of input) {
            let [street, person] = entry.split(" - ");
            if (neighborhoods.hasOwnProperty(street)) {
                neighborhoods[street].push(person);
            }
        }
    };
    let printDistribution = (neighborhoods) => {
        let sortedNeighborhoods = Object.keys(neighborhoods)
            .sort((a, b) => neighborhoods[b].length - neighborhoods[a].length);
        for (const neighborhood of sortedNeighborhoods) {
            console.log(`${neighborhood}: ${neighborhoods[neighborhood].length}`);
            for (const person of neighborhoods[neighborhood]) {
                console.log(`--${person}`);
            }
        }
    };

    distribution(input, neighborhoods);
    printDistribution(neighborhoods);
}
neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'])