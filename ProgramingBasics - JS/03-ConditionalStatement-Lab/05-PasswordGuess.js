function passwordGuess(passwordInput) {
    let password = passwordInput;

    if (password === "s3cr3t!P@ssw0rd") {
        console.log(`Welcome`);
    } else {
        console.log(`Wrong password!`);
    }

}

passwordGuess("qwerty");