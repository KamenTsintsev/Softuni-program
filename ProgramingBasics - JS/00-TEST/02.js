function solve(arg1, arg2, arg3) {
    let cpuNum = Number(arg1);
    let workers = Number(arg2);
    let workingDays = Number(arg3);

    let workTime = workers * workingDays * 8;
    let cpuMade = Math.floor(workTime/3)

    if(cpuNum>cpuMade){
        let loses = (cpuNum-cpuMade)*110.10;
        console.log(`Losses: -> ${loses.toFixed(2)} BGN`);
    }else{
        let profit = (cpuMade-cpuNum)*110.10;
        console.log(`Profit: -> ${profit.toFixed(2)} BGN`);
    }
}
solve(150, 7, 18);