function numbers(string) {
    let array = string.split(" ").map(Number);
    let average = array.reduce((a, b) => a + b, 0) / array.length
    let higherThanAaverage = array.filter((x) => {
        if (x > average) return x;
    }).sort((a, b) => b - a)
    let print = (arr) => {
        if (arr.length === 0) {
            console.log("No");
        } else {
            let toPrint = ""
            for (let i = 0; i < 5; i++) {
                if (typeof (arr[i]) != "undefined") {
                    toPrint += `${arr[i]} `;
                }
            }
            console.log(toPrint);
        }
    }
    print(higherThanAaverage);
}
numbers('10 20 30 40 50')
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbers('5')