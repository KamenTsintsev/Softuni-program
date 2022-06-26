// Easter eggs
function solve(input) {
    let text = input.shift()
    let pattern = /(?:@+|#+)(?<color>[a-z]{3,})(?:@+|#+)(?:[^a-zA-Z\d]*)?\/+(?<qty>\d+)\/+/g

    let matches = []
    let match = pattern.exec(text)
    while (match !== null) {
        matches.push(match);
        match = pattern.exec(text)
    }

    matches.forEach(m => {
        let color = m.groups["color"]
        let qty = m.groups["qty"]
        console.log(`You found ${qty} ${color} eggs!`);
    })
}
solve(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/'])
solve(['#@##@red@#/8/@rEd@/2/#@purple@////10/'])