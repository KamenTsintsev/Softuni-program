function solve(arg1, arg2, arg3) {
    let team = arg1;
    let type = arg2;
    let amount = Number(arg3);

    let sum = 0;

    let flag = false;

    switch (team) {
        case "Argentina":
            switch (type) {
                case "flags":
                    sum = 3.25 * amount;
                    break;
                case "caps":
                    sum = 7.20 * amount;
                    break;
                case "posters":
                    sum = 5.10 * amount;
                    break;
                case "stickers":
                    sum = 1.25 * amount;
                    break;
                default: 
                flag = true;
                console.log("Invalid stock!");
            }
            break;
        case "Brazil":
            switch (type) {
                case "flags":
                    sum = 4.20 * amount;
                    break;
                case "caps":
                    sum = 8.50 * amount;
                    break;
                case "posters":
                    sum = 5.35 * amount;
                    break;
                case "stickers":
                    sum = 1.20 * amount;
                    break;
                default: 
                flag = true;
                console.log("Invalid stock!");
            }
            break;
        case "Croatia":
            switch (type) {
                case "flags":
                    sum = 2.75 * amount;
                    break;
                case "caps":
                    sum = 6.9 * amount;
                    break;
                case "posters":
                    sum = 4.95 * amount;
                    break;
                case "stickers":
                    sum = 1.10 * amount;
                    break;
                default:
                    flag = true;    
                console.log("Invalid stock!");
            }
            break;
        case "Denmark":
            switch (type) {
                case "flags":
                    sum = 3.1 * amount;
                    break;
                case "caps":
                    sum = 6.5 * amount;
                    break;
                case "posters":
                    sum = 4.8 * amount;
                    break;
                case "stickers":
                    sum = 0.9 * amount;
                    break;
                default:
                    flag = true;    
                console.log("Invalid stock!");
            }
            break;
        default:
            flag = true;    
        console.log("Invalid country!");
    }
    if (!flag){
        console.log(`Pepi bought ${amount} ${type} of ${team} for ${sum.toFixed(2)} lv.`);
    }
    

}
solve("Brazil", "stickers", 5);