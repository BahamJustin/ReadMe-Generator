// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

const MITBadge =
  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

const GNUBadge =
  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

const generateMarkdown = (data) => {
  let licenseBadge = "";
  let licenseLink = "";

  if (data.license === "MIT") {
    licenseBadge = MITBadge;
    licenseLink = "https://opensource.org/licenses/MIT";
  } else if (data.license === "GNU") {
    licenseBadge = GNUBadge;
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
  }

  return `
  # ${data.title}
  ${licenseBadge}
  
  ## Description
  
  ${data.descript}
  
  ## Table of Contents
  
  [Install](#install)

  [Usage](#usage)

  [Contributing](#contributing)

  [Tests](#tests)

  [Contact](#contact)
  
  ## Installation 
  
  ${data.install} 
  
  ## Usage 
  
  ${data.usage}
  
  ## Contributing 
  
  ${data.contribute}
  
  ## Tests 
  
  ${data.test}
  
  ### Contact
  
  [GitHub](https://github.com/${data.username})  
  
  [Email](mailto:${data.email})

  ### License

  Licensed under the [${data.license}](${licenseLink}) license.
    `;
};

module.exports = generateMarkdown;
