import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let answers = await inquirer.prompt([
  {
    name: "age",
    type: "number",
    message: "Enter your Age:",
  },
]);
if (answers.age < 60) {
  console.log(
    chalk.red(
      "Insha Allah, in " +
        (60 - answers.age) +
        " years you will be 60 years old."
    )
  );
} else {
  chalkAnimation.rainbow("You are too Young Baby 😂");
}
