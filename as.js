#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const random = Math.floor(Math.random() * 5) + 1;
const guess = await inquirer.prompt([
    {
        type: "number",
        name: "usernum",
        message: "Guess a number between 1 to 5:"
    }
]);
let num1 = parseInt(guess.usernum);
if (num1 === random) {
    console.log(chalk.yellow(`Congratulations! You guessed the right number ${chalk.yellow(random)}!`));
}
else {
    console.log(chalk.red(`Sorry, the correct number was ${chalk.red(random)}.`));
}
