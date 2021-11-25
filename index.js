// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./src/readme-template");
const writeFile = require("./utils/writeFile");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("You need to enter a project name!");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmDescript",
    message: "Would you like to enter a description?",
    default: true,
  },
  {
    type: "input",
    name: "descript",
    message: "Please enter a description:",
    when: ({ confirmDescript }) => confirmDescript,
  },
  {
    type: "confirm",
    name: "confirmInstall",
    message: "Would you like to provide installation instructions?",
    default: true,
  },
  {
    type: "input",
    name: "install",
    message: "Please provide installation instructions:",
    when: ({ confirmInstall }) => confirmInstall,
  },
  {
    type: "confirm",
    name: "confirmUsage",
    message: "Would you like to provide usage information?",
    default: true,
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage information:",
    when: ({ confirmUsage }) => confirmUsage,
  },
  {
    type: "confirm",
    name: "confirmGuide",
    message: "Would you like to provide contribution guidelines?",
    default: true,
  },
  {
    type: "input",
    name: "contribute",
    message: "Please provide contribution guidelines:",
    when: ({ confirmGuide }) => confirmGuide,
  },
  {
    type: "confirm",
    name: "confirmTest",
    message: "Would you like to provide test instructions?",
    default: true,
  },
  {
    type: "input",
    name: "test",
    message: "Please provide test intructions:",
    when: ({ confirmTest }) => confirmTest,
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a license:",
    choices: ["GNU", "MIT"],
  },
  {
    type: "input",
    name: "username",
    message: "Please enter a GitHub username:",
    validate: (gitInput) => {
      if (gitInput) {
        return true;
      } else {
        console.log("You need to enter a valid GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter a email address:",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("You need to enter a valid email address!");
        return false;
      }
    },
  },
];

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions).then((answerData) => {
    return answerData;
  });
}

// Function call to initialize app
init()
  .then((answerData) => {
    return generateMarkdown(answerData);
  })
  .then((markdown) => {
    writeFile(markdown);
  });
