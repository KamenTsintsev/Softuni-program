function solve(arr1) {
    let index = 0;
    let badGrades = Number(arr1[index]);
    index++;
    let lastProblem = String(arr1[index]);
    let avgGrade = 0
    let counter = 0;
    let counterBG = 0;
    while (arr1[index] !== "Enough") {
        lastProblem = arr1[index];
        let grade = Number(arr1[index + 1]);
        avgGrade += grade;
        if (grade <= 4) {
            counterBG++;
        }
        if (counterBG == badGrades) {
            console.log(`You need a break, ${counterBG} poor grades.`);
            return;
        }
        index += 2;
        counter++;
    }
    console.log(`Average score: ${(avgGrade / counter).toFixed(2)}`);
    console.log(`Number of problems: ${counter}`);
    console.log(`Last problem: ${lastProblem}`);
}
// solve(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"])
// solve(["2", "Income", "3", "Game Info", "6", "Best Player", "4"])
