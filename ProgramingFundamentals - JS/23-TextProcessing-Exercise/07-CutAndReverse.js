function cutAndReverse(str) {
    let strArr = str.split("");
    let firstHalf = strArr.splice(0, strArr.length / 2).reverse().join("");
    let secondHalf = strArr.reverse().join("");
    console.log(firstHalf);
    console.log(secondHalf);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')

