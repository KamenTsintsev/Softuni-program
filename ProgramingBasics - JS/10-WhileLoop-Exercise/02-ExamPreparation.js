function examPrep(gradesInput) {
    let allowedBadGrades = Number(gradesInput[0]);

    let gradesNum = 0;
    let badGrades = 0;
    let sum = 0;
    let lastProb = " ";

    let index = 1;

    while (badGrades < allowedBadGrades) {
        let probName = gradesInput[index];
        if (probName === "Enough") {
            let avScore = sum / gradesNum;
            console.log(`Average score: ${avScore.toFixed(2)}`);
            console.log(`Number of problems: ${gradesNum}`);
            console.log(`Last problem: ${lastProb}`);
            break;
        }

        let grade = Number(gradesInput[index + 1]);

        sum += grade;
        lastProb = probName;

        if (grade <= 4) {
            badGrades++;
        }



        index += 2;
        gradesNum++;
    }

    if (badGrades >= allowedBadGrades) {
        console.log(`You need a break, ${badGrades} poor grades.`);
    }
}
examPrep(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])
