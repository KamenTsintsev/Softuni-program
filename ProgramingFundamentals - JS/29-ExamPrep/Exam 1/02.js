function adAstra(input) {
    let text = input.shift()
    let pattern = /(#|\|)(?<name>[A-Z][a-z]*(?:\s*(?:[A-Za-z]*))?)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d{1,5})\1/g

    let matches = []
    let match = pattern.exec(text)
    while (match !== null) {
        matches.push(match);
        match = pattern.exec(text)
    }
    let days = Math.floor(matches.reduce((a, x) => a + Number(x.groups["kcal"]), 0) / 2000)
    console.log(`You have food to last you for: ${days} days!`);

    matches.forEach(m => {
        let name = m.groups["name"]
        let date = m.groups["date"]
        let kcal = Number(m.groups["kcal"])
        console.log(`Item: ${name}, Best before: ${date}, Nutrition: ${kcal}`);
    })

}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
])
// adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])