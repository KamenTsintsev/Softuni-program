function sumNumbers(numInput){
    let firstNum = Number(numInput[0]);

    let index = 1;
    let sum = 0; 

    while (firstNum>sum){
       let currentNum = Number(numInput[index]);
       sum += currentNum;
       index++;
    }
    console.log(sum);


}
sumNumbers(["100","10","20","30","40"]);