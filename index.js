#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome to Code With Owais - CLI Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter Your Guessesd Number (Number Limit from 1 to 5)",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation! You guessed a correct number");
}
else if (answer.userGuessedNumber > 5) {
    console.log("Please enter a number between 1 to 5");
}
else {
    console.log("Sorry! You guessed a wrong number");
}
;
