function schoolGrades(input) {

    let grades = new Map();

    let addGrades = (input, gradesDB) => {
        for (const student of input) {
            let name = student.split(" ").shift();
            let grades = student.split(" ").splice(1).map(Number)
            if (!gradesDB.has(name)) {
                gradesDB.set(name, []);
            }
            for (const grade of grades) {
                gradesDB.get(name).push(Number(grade))
            }
        }
    };

    let average = (arr) => {
        let sum = arr.reduce((acc, x) => acc += x, 0) / arr.length;
        return sum;
    };

    let printGrades = (gradesDB) => {
        let sortedByGrades = Array.from(gradesDB.keys())
        sortedByGrades.sort((a, b) => { return average(grades.get(a)) - average(grades.get(b)) });
        for (let key in sortedByGrades) {
            console.log(`${sortedByGrades[key]}: ${gradesDB.get(sortedByGrades[key]).join(", ")}`);
        }
    }

    addGrades(input, grades)
    printGrades(grades)
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)