module.exports = (data) => {
  return ` 
  # ${data.title}
  
    ### License
    ${data.license}
    
    ## Description
    ${data.descript}
    
    ## Table of Contents
    
    [Install](Install)
    
    [Usage](Usage)
    
    [Contributing](Contributing)
    
    [Tests](Tests)
    
    [Questions](Questions)
    
    ## Installation
    ${data.install}
    
    ## Usage
    ${data.usage}
    
    ## Contributing
    ${data.contribute}
    
    ## Tests
    ${data.test}
    
    ### Questions
    
    [${data.username}](GitHub)
    
    [${data.email}](Email)
    `;
};
