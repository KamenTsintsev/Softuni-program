function trainingLab(widthInput, heightInput) {
    let roomWidth = Number(widthInput) * 100;
    let roomHeight = Number(heightInput) * 100;

    let widthCapacity =parseInt(roomWidth / 120);
    let heightCapacity = parseInt((roomHeight - 100) / 70);

    let roomCapacity = widthCapacity*heightCapacity-3;

    console.log(roomCapacity);
}

trainingLab("8.4", "5.2");