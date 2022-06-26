function solve(input) {
    let begin = Number(input[0]);
    let end = Number(input[1]);
    let S = Number(input[2]);

    let print = ""

    for (let i = end; i >= begin; i--){


        if (i%2===0&&i%3===0){
            if (i === S){
                break
            }
            print +=  i + " "
        }          
    }
    console.log(print);
}
solve(['1', '30', '12']);