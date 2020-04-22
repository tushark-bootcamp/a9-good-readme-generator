function generateMarkdown(data) {
    return `
  
  # ${data.projectTitle}
  [![Generic badge](https://img.shields.io/badge/Good Readme Generator-Maintained-green.svg)](https://shields.io/)
  
  ## Description
  ${data.description}
  
  ## Table of contents
  * ${data.toc}
  
  ## Installations
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.inputTests}

  ## Questions
  * ${data.inputGitHubProfilePic}
  * ${data.inputGithubEmail}
  `;
}

module.exports = generateMarkdown;