function gladiatorInventory(arr) {
    let initEquipment = arr.shift().split(" ");

    let currentCommand = arr.shift().split(" ");
    let command = currentCommand[0];
    let equipment = currentCommand[1];

    let toBuy = (array, item) => {
        if (array.indexOf(item) < 0) {
            array.push(item);
        }
    }
    let toTrash = (array, item) => {
        let itemIndex = array.indexOf(item)
        if (itemIndex >= 0) {
            array.splice(itemIndex, 1);
        }
    }
    toRepair = (array, item) => {
        let itemIndex = array.indexOf(item)
        if (itemIndex >= 0) {
            array.splice(itemIndex, 1);
            array.push(item);
        }
    }
    let toUpgrade = (array, item) => {
        item = item.split("-")
        let equip = item.shift();
        let upgrade = item.shift();
        let equipIndex = array.indexOf(equip)
        if (equipIndex >= 0) {
            array.splice(equipIndex + 1, 0, `${equip}:${upgrade}`);
        }
    }
    while (arr.length >= 0) {
        switch (command) {
            case "Buy":
                toBuy(initEquipment, equipment);
                break;
            case "Trash":
                toTrash(initEquipment, equipment);
                break;
            case "Repair":
                toRepair(initEquipment, equipment);
                break;
            case "Upgrade":
                toUpgrade(initEquipment, equipment);
                break;
        }
        if (arr.length === 0) {
            break;
        }
        currentCommand = arr.shift().split(" ");
        command = currentCommand[0];
        equipment = currentCommand[1];
    }
    console.log(initEquipment.join(" "));
}
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'])