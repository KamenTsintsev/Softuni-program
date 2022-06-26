function partyTime(input) {

    let reservations = input.splice(0, input.indexOf("PARTY"))
    input.shift();
    let vips = [];
    let regulars = [];

    for (const person of input) {
        if (reservations.includes(person)) {
            reservations.splice(reservations.indexOf(person), 1)
        }
    }
    reservations.map(person => {
        if (person[0] >= "0" && person[0] <= "9") {
            vips.push(person)
        } else {
            regulars.push(person)
        }
    })
    console.log(vips.length + regulars.length);
    vips.forEach(x => console.log(x))
    regulars.forEach(x => console.log(x))
}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    '0asd',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])

partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]
)