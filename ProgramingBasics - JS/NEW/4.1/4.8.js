function solve(arr1) {
    let qty = Number(arr1[0]);
    let salary = Number(arr1[1]);

    for (let i = 2; i < arr1.length; i++) {
        let site = String(arr1[i]);

        switch (site) {
            case "Facebook": salary -= 150; break;
            case "Instagram": salary -= 100; break;
            case "Reddit": salary -= 50; break;
        }


        // if (site === "Facebook") {
        //     salary -= 150;
        // } else if (site === "Instagram") {
        //     salary -= 100;
        // } else if (site === "Reddit") {
        //     salary -= 50;
        // }


        if (salary <= 0) {
            console.log("You have lost your salary.");
            return;
        }

    }

    console.log(salary);

}

solve(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"])
