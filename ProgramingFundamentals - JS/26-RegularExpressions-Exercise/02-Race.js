function race(input) {
    let participants = input.shift();
    let scores = {}
    let namePattern = /[A-Za-z]/g
    let numPattern = /\d/g

    while (input[0] !== "end of race") {
        let line = input.shift()
        let name = line.match(namePattern).join("");
        let distance = (line.match(numPattern).map(Number)
            .reduce((acc, x) => acc + x, 0));

        if (participants.includes(name)) {
            if (!scores.hasOwnProperty(name)) {
                scores[name] = 0;
            }
            scores[name] += distance
        }
    }
    let scoreKeys = Object.keys(scores)
        .sort((a, b) => {
            return scores[b] - scores[a];
        }).slice(0, 3)

    console.log(`1st place: ${scoreKeys[0]}`);
    console.log(`2nd place: ${scoreKeys[1]}`);
    console.log(`3rd place: ${scoreKeys[2]}`);
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])