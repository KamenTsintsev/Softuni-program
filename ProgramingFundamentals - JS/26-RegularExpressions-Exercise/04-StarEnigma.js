function starEnigma(input) {
    let count = input.shift()

    let starPattern = /[starSTAR]/gm;
    let infoPattern = /.*@(?<planet>[A-Za-z]+){1}[^@!\-:>]*:(?<population>\d+){1}[^@!\-:>]*!(?<action>[AD]){1}![^@!\-:>]*->(?<army>\d+){1}.*/m;

    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let i = 0; i < count; i++) {
        let line = input[i];
        let lineMatch = infoPattern.exec(line);
        if (lineMatch != null) {
            fillInfo(lineMatch, attackedPlanets, destroyedPlanets);
        } else {
            let starCount = line.match(starPattern);
            if (starCount !== null) {
                starCount = starCount.length;
            } else { continue; }
            let message = decode(line, starCount);
            let match = infoPattern.exec(message);
            fillInfo(match, attackedPlanets, destroyedPlanets);
        }
    }
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.sort((a, b) => a.localeCompare(b))
        .forEach(p => console.log(`-> ${p}`));
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.sort((a, b) => a.localeCompare(b))
        .forEach(p => console.log(`-> ${p}`));
    function fillInfo(match, atkArray, destArray) {
        if (match !== null) {
            let planet = match.groups["planet"]
            let action = match.groups["action"]
            if (action === "A") {
                atkArray.push(planet)
            } else if (action === "D") {
                destArray.push(planet)
            }
        }
    }
    function decode(input, count) {
        let decodedMessage = ""
        for (let el of input) {
            decodedMessage += String.fromCharCode(el.charCodeAt() - count)
        }
        return decodedMessage;
    }
}

starEnigma(['3',
    'STCDoghudd4C=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR',
    "@ASD:3000!D!->4000NM"])
// starEnigma(['3',
//     "tt(''DGsvywgerx>6444444444%H%1B9444",
//     'GQhrr|A977777(H(TTTT',
//     'EHfsytsnhf?8555&I&2C9555SR'])