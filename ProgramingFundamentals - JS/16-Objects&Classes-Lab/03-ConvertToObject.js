function convToObj(string) {
    let obj = JSON.parse(string)

    let entries = Object.entries(obj);

    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}

convToObj('{"name": "George", "age": 40, "town": "Sofia"}')