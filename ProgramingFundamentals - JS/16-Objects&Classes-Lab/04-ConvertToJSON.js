function convToJSON(name, lastName, hairColor) {
    let obj = {
        name,
        lastName,
        hairColor
    }

    console.log(JSON.stringify(obj));
}