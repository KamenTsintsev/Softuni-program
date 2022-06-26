function dictionary(input) {
    let dictionary = {}
    for (let element of input) {
        let obj = JSON.parse(element);
        let key = Object.keys(obj)[0];
        let value = Object.values(obj)[0];
        dictionary[key] = value;
    }
    Object.keys(dictionary)
        .sort((a, b) => {
            return a.localeCompare(b)
        })
        .forEach((key) => {
            console.log(`Term: ${key} => Definition: ${dictionary[key]}`);
        });
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    '{"Boiler":"DSA"}'
])