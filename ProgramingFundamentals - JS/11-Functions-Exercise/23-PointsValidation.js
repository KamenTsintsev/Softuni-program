function pointsValid(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];

    function checkPoint(x1, y1, x2, y2) {
        let point = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))
        return point
    }
    function isValid(x1, y1, x2, y2) {
        if (checkPoint(x1, y1, x2, y2) === Math.trunc(checkPoint(x1, y1, x2, y2))) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
    isValid(x1, y1, 0, 0)
    isValid(x2, y2, 0, 0)
    isValid(x1, y1, x2, y2)
}
pointsValid([2, 1, 1, 1])
// pointsValid([3, 0, 0, 4])