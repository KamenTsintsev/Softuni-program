function repeatString(str, repetitions) {
    let print = ""
    for (let i = 0; i < repetitions; i++) {
        print += str;
    }
    console.log(print);
}

repeatString("str", 3)