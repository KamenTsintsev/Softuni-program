function solve(arr1) {
    let floor = Number(arr1[0]);
    let room = Number(arr1[1]);

    for (let i = floor; i >= 1; i--) {
        let etaj = "";
        for (let j = 0; j < room; j++) {

            if (i === floor) {
                etaj += `L${i}${j} `;
            }
            else if (i % 2 == 1) {
                etaj += `A${i}${j} `;
            } else if (floor % 2 == 0) {
                etaj += `O${i}${j} `;
            }
        }
        console.log(etaj);
    }
}
solve(["6", "4"])