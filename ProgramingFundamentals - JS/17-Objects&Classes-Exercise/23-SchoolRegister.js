function schoolRegister(input) {

    let grades = {};

    for (let studentInfo of input) {
        let [name, grade, average] = studentInfo.split(", ")
        name = name.split(": ")[1];
        grade = grade.split(": ")[1];
        average = Number(average.split(": ")[1]);
        if (average < 3) {
            continue;
        }

        if (!grades.hasOwnProperty(grade)) {
            grades[grade] = [];
        }
        grades[grade].push(`${name}: ${average}`);
    }

    let sortedGrades = Object.keys(grades).sort((a, b) => Number(a) - Number(b))

    for (let grade in grades) {
        let average = 0;
        let avgCounter = 0;
        let names = []
        for (let student of grades[grade]) {
            let [name, score] = student.split(": ")
            names.push(name);
            average += Number(score);
            avgCounter++;
        }
        average = (average / avgCounter).toFixed(2);

        console.log(`${Number(grade) + 1} Grade `);
        console.log(`List of students: ${names.join(", ")}`);
        console.log(`Average annual grade from last year: ${average}`);
        console.log("");
    }
}

schoolRegister([
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
])