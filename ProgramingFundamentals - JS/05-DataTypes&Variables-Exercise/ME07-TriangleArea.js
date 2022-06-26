// function solve(arg1, arg2, arg3) {
//     let a = arg1;
//     let b = arg2;
//     let c = arg3;

//     let s = (a + b + c) / 2;
//     let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

//     console.log(area);
// }
// solve(2, 3.5, 4)

function returnDay(num) {
    let days = [null, "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    if (num < 1 || num > 7) {
        // return null;
        console.log("null");
    } else {
        // return days[num];
        console.log(days[num]);
    }

}
returnDay(55)
