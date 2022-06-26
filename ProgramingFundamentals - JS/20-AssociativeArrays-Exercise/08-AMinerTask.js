function aMinerTask(input) {

    let stash = {};

    for (let i = 0; i < input.length; i += 2) {
        let material = input[i];
        let qty = Number(input[i + 1]);

        if (!stash.hasOwnProperty(material)) {
            stash[material] = 0
        }
        stash[material] += qty;
    }

    for (const resource in stash) {
        console.log(`${resource} -> ${stash[resource]}`);
    }
}
aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17',
    'Gold',
    '15',
])