// let count = 0;

// while (count < 10) {
//     console.log(count)
//     count++;
// }

// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("enter the secret code...");
// }

// console.log("CONGRATS, YOU GUESSED RIGHT!")


let maximum = parseInt(prompt("Enter your maximum number!"));

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number -.-"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;


let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === "q") break;

    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
    } else {
        guess = prompt("Too low!Enter a new guess:");
    }
}
if (guess === "q") {
    console.log("YOU'RE QUITTING?, OK")

} else {
    console.log(`You got it! it took you ${attempts} guesses`)
}

