function scolarship(incomeInput, gradeInput, minSalaryInput) {
    let income = Number(incomeInput);
    let grade = Number(gradeInput);
    let minSalary = Number(minSalaryInput);

    let socialScolarship = minSalary * 0.35;
    let excellentScolarship = grade * 25;

    if (income < minSalary && grade > 4.50 && grade >= 5.50) {
        if (excellentScolarship > socialScolarship) {
            console.log(`You get a scholarship for excellent results ${Math.floor(excellentScolarship)} BGN`);
        } else if (socialScolarship > excellentScolarship) {
            console.log(`You get a Social scholarship ${Math.floor(socialScolarship)} BGN`);
        }
    } else if (income < minSalary && grade > 4.50) {
        console.log(`You get a Social scholarship ${Math.floor(socialScolarship)} BGN`);
    } else if (grade >= 5.50) {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellentScolarship)} BGN`);
    } else {
        console.log(`You cannot get a scholarship!`);
    }
}

scolarship("450.00", "5.5", "420.00");
