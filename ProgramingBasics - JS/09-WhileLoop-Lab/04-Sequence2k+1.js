function sequence2k1(numInput){
    let firstNum = Number(numInput[0]);

    
    let currentNum =0;
    while (currentNum<firstNum){
        currentNum = currentNum*2+1;
        if(currentNum>firstNum) break;
        console.log(currentNum);
        
    }

}
sequence2k1(["31"]);