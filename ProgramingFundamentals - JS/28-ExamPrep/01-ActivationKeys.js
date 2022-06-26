function activationKeys(input) {
    let initKey = input.shift();
    while (input[0] !== "Generate") {
        let line = input.shift().split(">>>");
        let command = line.shift();
        switch (command) {
            case "Contains":
                let substr = line.shift();
                contains(initKey, substr)
                break;
            case "Flip":
                initKey = flip(initKey, line);
                break;
            case "Slice":
                initKey = slice(initKey, line);
                break;
        }
    }
    console.log(`Your activation key is: ${initKey}`);
    function contains(key, substr) {
        if (key.includes(substr)) {
            console.log(`${key} contains ${substr}`);
        } else {
            console.log("Substring not found!");
        }
    }
    function slice(key, line) {
        let [startI, endI] = line.map(Number)
        key = key.split("")
        key.splice(startI, endI - startI)
        key = key.join("")
        console.log(key);
        return key;
    }
    function flip(key, line) {
        let ulc = line.shift();
        let [startI, endI] = line.map(Number);
        key = key.split("")
        switch (ulc) {
            case "Upper":
                for (let i = startI; i < endI; i++) {
                    key[i] = key[i].toUpperCase()
                }
                break;
            case "Lower":
                for (let i = startI; i < endI; i++) {
                    key[i] = key[i].toLowerCase();
                }
                break;
        }
        key = key.join("")
        console.log(key);
        return key;
    }
}
activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"])

