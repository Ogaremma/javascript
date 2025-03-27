// if 
// else if
// switch 


// if(condition){
//     result
// }else{
//     result
// }

// const age = 16;

// if(age < 18){
//     colsole.log("minnor")
// }else{
//     console.log("aldult")
// }

// const grade = 0;
// if (grade >= 70) {
//     console.log("A")
// } else if (grade > 59 && grade < 70) {
//     console.log("B")
// } else if (grade > 49 && grade < 60) {
//     console.log("C")
// } else {
//     console.log("no score")
// }

const password = prompt("please enter a new password");

// PASSWORD MUST BE 6+ CHARACTERS
if (password.length >= 6) {
    // PASSWORD CANNOT INCLUDE SPACE
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!")
    } else {
        console.log("Pass word cannot contain spaces!")
    }
} else {
    console.log("PASSWORD TOO SHORT! MUST BE 6+ CHARACTERS")
}

