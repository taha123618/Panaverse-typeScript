import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { questions } from "./Questions/index.js";
import { answers } from "./Answers/index.js";

// const calculator: any = await inquirer.prompt([
//   {
//     name: "no",
//     type: "number",
//     message: "Enter your No:",
//   },
//   {
//     name: "op",
//     type: "checkbox",
//     message: "Choose Operator",
//   },
//   {
//     name: "con",
//     type: "confirm",
//   },
// ]);

// if (questions.no >= 0) {

//   console.log(chalkAnimation.rainbow("Your No" + questions.no));
// } else {
//   console.log(chalk.red("Error on Logic"));
// }

const data = () => {
  inquirer.prompt(questions).then(answers);
};
data();
