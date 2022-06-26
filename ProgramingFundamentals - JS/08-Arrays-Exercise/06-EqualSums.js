function solve(arr1) {

    let isEqual = false;

    for (let i = 0; i < arr1.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let l = i - 1; l >= 0; l--) {
            leftSum += arr1[l];

        }
        for (let r = i + 1; r < arr1.length; r++) {
            rightSum += arr1[r];

        }
        if (leftSum === rightSum) {
            console.log(i);
            isEqual = true;
            break;
        }
    }

    if (!isEqual) {
        console.log("no");

    }
}
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])