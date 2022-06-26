function carWash(commands) {
    let commandsL = commands.length;
    let cleanValue = 10;
    function commandReciever(comm) {
        switch (comm) {
            case "soap":
                cleanValue += 10;
                break;
            case "water":
                cleanValue *= 1.20;
                break;
            case "vacuum cleaner":
                cleanValue *= 1.25;
                break;
            case "mud":
                cleanValue *= 0.9;
                break;
        }
        return cleanValue;
    }

    for (let i = 1; i < commandsL; i++) {
        let currentCommand = commands[i];
        commandReciever(currentCommand);
    }
    console.log(`The car is ${cleanValue.toFixed(2)}% clean.`);
}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])