#! /usr/bin/env node

import inquirer from "inquirer";

//* 1) Compupter will generate a random number
//* 2) User input for guessing number
//* 3) Compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 6 +1);

console.log(`Welcome to Number Guessing Game -- Created By Falak Sher Khan`)

const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1 to 6:",
  },
]);

if (answer.userGuessedNumber === randomNumber) {
  console.log(`Congtratulation you guessed the correct number !!!`);
} else {
  console.log(`You guessed the wrong number. Try again!!!`);
}
    console.log("The right number is:", randomNumber);