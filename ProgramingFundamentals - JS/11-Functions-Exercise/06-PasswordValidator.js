function passwordValidator(pass) {
    let passLength = pass.length;
    let numsValid = stringContainsNum(pass);
    let specCharValid = stringContainsSpecChars(pass);
    let lengthValid = num => {
        if (num < 6 || num > 10) {
            return false;
        } else {
            return true;
        }
    }
    function stringContainsSpecChars(str) {
        let isTrue = true
        for (let i = 0; i < passLength; i++) {
            if (!(str[i] >= "a" && str[i] <= "z" || str[i] >= "A" && str[i] <= "Z" || str[i] >= "0" && str[i] <= "9")) {
                isTrue = false;
                break;
            }
        }
        if (isTrue) {
            return true;
        } else {
            return false;
        }
    }

    function stringContainsNum(str) {
        let numCount = 0;
        for (let i = 0; i < passLength; i++) {
            let currentChar = str[i]
            if (!isNaN(currentChar)) {
                numCount++;
            }
            if (numCount >= 2) {
                return true;
            }
        }
        if (numCount < 2) {
            return false;
        }
    }

    if (!lengthValid(passLength)) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!specCharValid) {
        console.log("Password must consist only of letters and digits");
    }
    if (!numsValid) {
        console.log("Password must have at least 2 digits");
    }

    if (lengthValid(passLength) && specCharValid && numsValid) {
        console.log("Password is valid");
    }
}
passwordValidator("0")

