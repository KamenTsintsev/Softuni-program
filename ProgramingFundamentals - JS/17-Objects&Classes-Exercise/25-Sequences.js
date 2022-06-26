function sequences(input) {

    let uniqueArrays = []

    for (let currentArray of input) {
        currentArray = JSON.stringify(JSON.parse(currentArray).sort((a, b) => b - a));
        if (!uniqueArrays.includes(currentArray)) {
            uniqueArrays.push(currentArray)
        }
    }

    uniqueArrays = uniqueArrays.map(el => JSON.parse(el))
        .sort((a, b) => (a.length !== b.length) ? a.length - b.length : null)
        .forEach(el => {
            console.log(`[${el.join(", ")}]`);
        })
}

sequences(["[-3.00, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[5, -3, 3, -2, 2, -1, 1, 0]"]
)