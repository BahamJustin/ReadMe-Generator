const generateMarkdown = require("../src/readme-template");
const writeFile = require("../utils/writeFile");

const sampleAnswer = require("./sample-answers");

writeFile(generateMarkdown(sampleAnswer));

// Look in Module for tests with sample answers
