function trekkingMania(input) {
    let index = 0;
    let groupsNum = Number(input[index]);
    index++;

    let m1 = 0;
    let m2 = 0;
    let m3 = 0;
    let m4 = 0;
    let m5 = 0;

    let allPeople = 0;

    for (let i = 0; i < groupsNum; i++) {
        let currentGroup = Number(input[index]);

        if (currentGroup <= 5) {
            m1 += currentGroup;
        } else if (currentGroup <= 12) {
            m2 += currentGroup;
        } else if (currentGroup <= 25) {
            m3 += currentGroup;
        } else if (currentGroup <= 40) {
            m4 += currentGroup;
        } else {
            m5 += currentGroup;
        }

        allPeople = m1 + m2 + m3 + m4 + m5;

        index++;
    }

    console.log(`${(m1/allPeople*100).toFixed(2)}%`);
    console.log(`${(m2/allPeople*100).toFixed(2)}%`);
    console.log(`${(m3/allPeople*100).toFixed(2)}%`);
    console.log(`${(m4/allPeople*100).toFixed(2)}%`);
    console.log(`${(m5/allPeople*100).toFixed(2)}%`);
}
trekkingMania([
    '10', '10', '5',
    '1', '100', '12',
    '26', '17', '37',
    '40', '78'
])
// trekkingMania(['5', '25', '41', '31', '250', '6'])