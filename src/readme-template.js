module.exports = (data) => {
  return `
  # ${data.title}
    
  Badge 
  
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

  Licensed under the [${data.license}]() license.
    `;
};
