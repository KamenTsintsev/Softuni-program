function solve(arr1, arr2, arr3) {
    let income = Number(arr1)
    let grade = Number(arr2)
    let minIncome = Number(arr3)

    let socScholarship = minIncome * 0.35;
    let exScholarship = grade * 25;

    if (income < minIncome && grade > 4.50 && grade >= 5.50) {
        if (exScholarship > socScholarship) {
            console.log(`You get a scholarship for excellent results ${Math.floor(exScholarship)} BGN`);
        } else if (socScholarship > exScholarship) {
            console.log(`You get a Social scholarship ${Math.floor(socScholarship)} BGN`);
        }
    } else if (income < minIncome && grade > 4.50) {
        console.log(`You get a Social scholarship ${Math.floor(socScholarship)} BGN`);
    } else if (grade >= 5.50) {
        console.log(`You get a scholarship for excellent results ${Math.floor(exScholarship)} BGN`);
    } else {
        console.log(`You cannot get a scholarship!`);
    }



    // floor()

    // if (grade >= 4.5) {
    //     if (minIncome > income) {

    //         console.log();
    //     } else {
    //         console.log("You cannot get a scholarship!");
    //     }
    // }

    // if () {

    // }
}

solve("300.00", "5.65", "420.00")