function printResult(input) {
    let k = input[0];
    let firstKEls = (arr, k) => {
        let firstKElsArray = arr.slice(1, k + 1);
        return firstKElsArray.join(" ");
    }
    let lastKEls = (arr, k) => {
        let lastKElsArray = arr.slice(arr.length - k);
        return lastKElsArray.join(" ");
    }
    let print = (toPrint) => console.log(toPrint);

    print(firstKEls(input, k));
    print(lastKEls(input, k));
}

printResult([3, 6, 7, 8, 9])