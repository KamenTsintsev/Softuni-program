function password(passInput){
    let name = passInput[0];
    let pass = passInput[1];

    let index = 2;

    while(passInput[index]!==pass){
        index++;
    }
    console.log(`Welcome ${name}!`)
}
password(["Nakov","1234","Pass","1324","asd","ghj","134","1234"]);