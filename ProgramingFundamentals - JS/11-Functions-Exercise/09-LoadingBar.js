function printResult(num) {
    let stopper = num / 10;
    let loadBar = num => {
        let result = "["
        for (let i = 0; i < num; i++) {
            result += "%";
        }
        for (let i = num; i < 10; i++) {
            result += ".";
        }
        result += "]"
        return result;
    }

    if (num < 100) {
        console.log(`${num}% ${loadBar(stopper)}`);
        console.log("Still loading...");
    } else {
        console.log(`${num}% Complete!`);
        console.log(loadBar(stopper));
    }
}

printResult(10)