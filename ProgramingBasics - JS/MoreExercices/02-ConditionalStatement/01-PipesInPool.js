function pipesInPool(volumeInput, pipe1Input, pipe2Input, hoursInput) {
    let poolVolume = Number(volumeInput);
    let pipe1 = Number(pipe1Input);
    let pipe2 = Number(pipe2Input);
    let hours = Number(hoursInput);

    let pipe1Volume = pipe1 * hours;
    let pipe2Volume = pipe2 * hours;
    let filledVolume = pipe1Volume + pipe2Volume;

    if (filledVolume <= poolVolume) {
        console.log(`The pool is ${(filledVolume/poolVolume)*100}% full.Pipe 1: ${((pipe1Volume/filledVolume)*100).toFixed(2)}%.Pipe 2: ${((pipe2Volume/filledVolume)*100).toFixed(2)}%.`)
    }else{
        console.log(`For ${hours} hours the pool overflows with ${(filledVolume-poolVolume).toFixed(2)} liters.`)
    }

}

pipesInPool(100, 100, 100, 2.5);