#! /usr/bin/env node
import inquirer from "inquirer";
const user = await inquirer.prompt([{ message: "HELLO what's your name", name: "name" }]);
console.log("WELCOME", user.name, "let's calculate");
const answer = await inquirer.prompt([{
        message: "Your first number is ", type: "number", name: "firstnumber"
    },
    { message: "Your second number is ", type: "number", name: "secondnumber"
    },
    { message: "Select one of the operator", type: "list", name: "operator",
        choices: ["ADDITION", "SUBTRACTION", "MULTIPILICATION", "DIVISION"],
    },]);
if (answer.operator === "ADDITION") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "SUBTRACTION") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "MULTIPILICATION") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "DIVISION") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else
    console.log("coding mistake");
