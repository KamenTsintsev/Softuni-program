function arrManipulation(startingArray) {
    let arr = startingArray.shift().split(" ").map(Number)

    let add = (num) => arr.push(num);
    let remove = (num) => arr = arr.filter(el => el !== num)
    let removeAt = (num) => arr.splice(num, 1);
    let insert = (num, index) => arr.splice(index, 0, num);

    let printAsString = (toPrint) => console.log(toPrint.join(" "));

    for (let element of startingArray) {
        let [command, firstNum, secondNum] = element.split(" ");
        firstNum = Number(firstNum)
        secondNum = Number(secondNum)

        switch (command) {
            case "Add":
                add(firstNum)
                break;
            case "Remove":
                remove(firstNum)
                break;
            case "RemoveAt":
                removeAt(firstNum)
                break;
            case "Insert":
                insert(firstNum, secondNum)
                break;
        }
    }
    printAsString(arr)
}

arrManipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)