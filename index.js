#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.bold.rgb(179, 160, 255)("\n\t Welcome to 'Code With Owais' - CLI Number Guessing Game\n"));
console.log(chalk.rgb(186, 255, 255)(" I've selected a random number between 1 to 5. Can you guess it?\n"));
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter Your Guessed Number (Number Limit from 1 to 5):",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log(chalk.rgb(60, 226, 113)("\n Congratulation! You guessed a correct number"));
}
else if (answer.userGuessedNumber > 5) {
    console.log("\n Please enter a number between 1 to 5");
}
else {
    console.log(chalk.redBright("\n Sorry! You guessed a wrong number"));
    console.log(`\n I've selected a number: ${chalk.bold.rgb(255, 131, 51)(randomNumber)}`);
}
;
