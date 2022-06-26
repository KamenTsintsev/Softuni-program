function projTime(name, projNum) {
    let hours = Number(projNum) * 3 ;
    console.log (`The architect ${name} will need ${hours} hours to complete ${projNum} project/s.`);
}

projTime("Ivan", "5");