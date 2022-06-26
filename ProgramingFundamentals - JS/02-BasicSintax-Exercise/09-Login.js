function solve(arr1) {
    let username = arr1[0];

    let password = "";

    for (let k = 0; k < username.length; k++) {
        password = username[k] + password
    }

    let counter = 0;

    for (let i = 1; i < arr1.length; i++) {
        counter++;
        let input = arr1[i];

        if (input === password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if (counter >= 4) {
                console.log(`User ${username} blocked!`);
                break;
            } else {
                console.log("Incorrect password. Try again.");
            }
        }

    }

}

solve(['Acer', 'login', 'go', 'let me in', 'recA']);
// solve(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);