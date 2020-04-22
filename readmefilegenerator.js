function generateMarkdown(data) {
    return `
  
  # ${data.projectTitle}
  [![Generic badge](https://img.shields.io/badge/Maintained-yes-green.svg)](https://github.com/tushark-bootcamp/a9-good-readme-generator)
  
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