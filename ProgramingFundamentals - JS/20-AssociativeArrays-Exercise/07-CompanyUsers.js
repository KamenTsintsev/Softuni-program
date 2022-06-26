function companyUsers(input) {

    let companies = {};
    for (const line of input) {
        let [company, user] = line.split(" -> ")
        if (!companies.hasOwnProperty(company)) {
            companies[company] = new Set();
        }
        companies[company].add(user)
    }
    let sortedCompaniesByNameAsc = Object.keys(companies)
        .sort((a, b) => a.localeCompare(b));

    for (const company of sortedCompaniesByNameAsc) {
        console.log(company);
        for (const employee of companies[company]) {
            console.log(`-- ${employee}`);
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])