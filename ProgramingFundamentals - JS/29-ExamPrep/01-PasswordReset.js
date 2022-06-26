function passwordReset(input) {
    let password = input.shift();

    while (input[0] !== "Done") {
        let line = input.shift().split(" ");
        let command = line.shift();
        (command === "TakeOdd") ? password = takeOdd(password) :
            (command === "Cut") ? password = cut(line, password) :
                (command === "Substitute") ? password = substitute(line, password) : null
    }
    console.log(`Your password is: ${password}`);

    function takeOdd(pass) {
        let newPass = "";
        pass = pass.split("");
        for (let i = 1; i < pass.length; i += 2) {
            newPass += pass[i];
        }
        console.log(newPass);
        return newPass;
    }
    function cut(input, pass) {
        let [index, length] = input.map(Number);
        let toDel = pass.slice(index, index + length)
        pass = pass.replace(toDel, "")
        console.log(pass);
        return pass
    }
    function substitute(input, pass) {
        let [subStr, substitute] = input;
        if (pass.includes(subStr)) {
            while (pass.includes(subStr)) {
                pass = pass.replace(subStr, substitute)
            }
            console.log(pass);
            return pass;
        } else {
            console.log("Nothing to replace!");
            return pass;
        }
    }
}

// passwordReset(["BasdBasdBasdB", "TakeOdd", "Done"])
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])