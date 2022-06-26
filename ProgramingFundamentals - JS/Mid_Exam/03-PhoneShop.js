function phoneShop(arr) {
    let initPhones = arr.shift().split(", ");

    let currentCommand = arr.shift().split(" - ");
    let command = currentCommand[0];
    let phone = currentCommand[1];

    let toAdd = (array, item) => {
        if (array.indexOf(item) < 0) {
            array.push(item);
        }
    }
    let toRemove = (array, item) => {
        let itemIndex = array.indexOf(item)
        if (itemIndex >= 0) {
            array.splice(itemIndex, 1);
        }
    }
    let bonusPhone = (array, item) => {
        item = item.split(":")
        let phone = item.shift();
        let toAdd = item.shift();
        let equipIndex = array.indexOf(phone)
        if (equipIndex >= 0) {
            array.splice(equipIndex + 1, 0, `${toAdd}`);
        }
    }
    let toMove = (array, item) => {
        let itemIndex = array.indexOf(item)
        if (itemIndex >= 0) {
            array.splice(itemIndex, 1);
            array.push(item);
        }
    }

    while (command !== "End") {
        switch (command) {
            case "Add":
                toAdd(initPhones, phone);
                break;
            case "Remove":
                toRemove(initPhones, phone);
                break;
            case "Bonus phone":
                bonusPhone(initPhones, phone);
                break;
            case "Last":
                toMove(initPhones, phone);
                break;

        }
        if (arr.length === 0) {
            break;
        }
        currentCommand = arr.shift().split(" - ");
        command = currentCommand[0];
        phone = currentCommand[1];
    }
    console.log(initPhones.join(", "));
}
// phoneShop(["SamsungA50, MotorolaG5, IphoneSE",
//     "Add - Iphone10",
//     "Remove - IphoneSE",
// "End"])
phoneShop(["HuaweiP20, XiaomiNote",
    "Remove - Samsung",
    "Bonus phone - XiaomiNote:Iphone5",
    "End"])

