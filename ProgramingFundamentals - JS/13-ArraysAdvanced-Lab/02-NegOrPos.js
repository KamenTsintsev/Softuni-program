function negOrPos(arr) {
    let newArr = sortArr(arr);
    let printNum = num => {
        console.log(num);
    };
    for (const num of newArr) {
        printNum(num);
    }

    function sortArr(arr) {
        let newArr = []
        arr.map((element) => {
            if (element < 0) {
                newArr.unshift(element);
            } else {
                newArr.push(element);
            };
        });
        return newArr
    }

}



negOrPos(['7', '-2', '8', '9']);

