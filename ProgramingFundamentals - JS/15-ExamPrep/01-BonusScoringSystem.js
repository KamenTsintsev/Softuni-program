function bonusScoringSystem(arr) {
    let students = Number(arr.shift());
    let allLectures = Number(arr.shift());
    let aditBonus = Number(arr.shift());

    let maxBonus = 0;
    let mbLectures = 0;

    for (let i = 0; i < students; i++) {
        let attendance = Number(arr.shift())
        let bonus = (attendance / allLectures * (5 + aditBonus))
        if (bonus > maxBonus) {
            maxBonus = bonus;
            mbLectures = attendance;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${mbLectures} lectures.`);
}

bonusScoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]
)