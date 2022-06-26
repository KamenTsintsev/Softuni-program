function validNumber(numInput) {
    let num = Number(numInput);

    if(num === 0){
        console.log("");
    }else{
        if(num>=100 && num<=200){
            console.log("");
        }else(
            console.log("invalid")
        )
    }
}

validNumber("20");