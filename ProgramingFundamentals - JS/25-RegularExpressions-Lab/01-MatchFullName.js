function matchFullName(str) {
    let regEx = /\b[A-Z][a-z]+[ ][A-Z]{1}[a-z]+\b/g
    let validName = null;
    let validNames = [];
    while ((validName = regEx.exec(str)) !== null) {
        validNames.push(validName[0])
    }
    console.log(validNames.join(" "));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")