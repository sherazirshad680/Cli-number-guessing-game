#! /user/bim/evn node
import inquirer from "inquirer";
// 1) computer will generate a random nunber - Done;
// 2) user input for guessing number - Done;
// 3) compare user input with computer generated number and show result - Done;
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to number guessing game");
const answers = await inquirer.prompt([
    {
        name: "UserGuessNumber",
        type: "number",
        message: "please guess a number between 1-6:",
    },
]);
console.log(answers);
if (answers.UserGuessNumber === randomNumber) {
    console.log("Congratlation! you guessed right number");
}
else {
    console.log("You guessed wrong number.");
}
