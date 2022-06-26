function legendaryFarming(input) {
    let inputArr = input.split(" ");
    let inputL = inputArr.length;

    let keyMaterials = {
        "fragments": 0,
        "shards": 0,
        "motes": 0
    }
    let junkMaterials = {}

    let isLegendaryFound = false;
    for (let i = 0; i < inputL; i += 2) {
        let [qty, material] = [Number(inputArr[i]), (inputArr[i + 1]).toLowerCase()];

        switch (material) {
            case "fragments":
                keyMaterials[material] += qty;
                checkForLegendary(material, keyMaterials, isLegendaryFound)
                if (isLegendaryFound) console.log("Valanyr obtained!");
                break;
            case "shards":
                keyMaterials[material] += qty;
                checkForLegendary(material, keyMaterials, isLegendaryFound)
                if (isLegendaryFound) console.log("Shadowmourne obtained!");
                break;
            case "motes":
                keyMaterials[material] += qty;
                checkForLegendary(material, keyMaterials, isLegendaryFound)
                if (isLegendaryFound) console.log("Dragonwrath obtained!");
                break;
            default:
                addJunkMaterial(material, qty, junkMaterials)
                break;
        }
        if (isLegendaryFound) break
    }
    Object.keys(keyMaterials)
        .sort((a, b) => keyMaterials[b] - keyMaterials[a] || a.localeCompare(b))
        .forEach(el => console.log(`${el}: ${keyMaterials[el]}`));

    Object.keys(junkMaterials)
        .sort((a, b) => a.localeCompare(b))
        .forEach(el => console.log(`${el}: ${junkMaterials[el]}`));

    function checkForLegendary(materialName, objKeyMaterials) {
        if (objKeyMaterials[materialName] >= 250) {
            objKeyMaterials[materialName] -= 250;
            return isLegendaryFound = true;
        }
    }
    function addJunkMaterial(materialName, qty, objJunkMaterials) {
        if (!objJunkMaterials.hasOwnProperty(materialName)) {
            objJunkMaterials[materialName] = qty;
        } else {
            objJunkMaterials[materialName] += qty;
        }
    }
}
// legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')