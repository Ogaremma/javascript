const password = prompt("Enter a password");

if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("Valid Password")
} else {
    console.log("INCORRECT FORMAT FOR PASSWORD")
}