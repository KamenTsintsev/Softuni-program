function graduationPt2(gradesInput) {
    let index = 0;
    let name = gradesInput[index];
    index++;
    let grade = 0;
    let sum = 0
    let fails = 0

    while (index < gradesInput.length) {
        let currentGrade = Number(gradesInput[index]);
        sum += currentGrade;

        if (currentGrade < 4) {
            fails++;
        }

        if (fails > 1) {
            break;
        }
        
        grade++;
        index++;
    }

    if (grade < 12) {
        console.log(`${name} has been excluded at ${grade} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${(sum / grade).toFixed(2)}`);
    }
}

graduationPt2(["Gosho",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])


