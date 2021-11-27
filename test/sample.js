const generateMarkdown = require("../src/readme-template");
const writeFile = require("../utils/writeFile");

const sampleAnswer = require("./sample-answers");

const writeSample = () => writeFile(generateMarkdown(sampleAnswer));

// Look in Module for tests with sample answers
module.exports = writeSample;
