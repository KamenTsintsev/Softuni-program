function salary(tabsInput) {
    let tabsNumber = Number(tabsInput[0]);
    let salary = Number(tabsInput[1]);

    for (let i = 2; i <= tabsNumber; i++) {
        let currentTab = tabsInput[i];
        switch (currentTab) {
            case "Facebook": salary -= 150; break;
            case "Instagram": salary -= 100; break;
            case "Reddit": salary -= 50; break;
        }
    }

    if (salary <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(`${(salary).toFixed()}`);
    }
}
// salary(["3","500","Facebook","Stackoverflow.com","softuni.bg"]);
// salary(["5", "500","Facebook", "Github.com","Instagram", "Stackoverflow.com", "softuni.bg"]);
// salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"])