function generateMarkdown(data) {
    return `
  
  # ${data.projectTitle}
  [![Generic badge](https://img.shields.io/badge/GoodReadme-Generator-green.svg)](https://github.com/tushark-bootcamp/a9-good-readme-generator)
  
  ## Description
  ${data.description}
  
  ## Table of contents
  ${data.toc.map(tocItem => `* ${tocItem}`).join("\n")}

  ## Installations
  ${data.installation.map(installItem => `* ${installItem}`).join("\n")}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  * ${data.inputGitHubProfilePic}
  * ${data.inputGithubEmail}
  
  ## Screenshots of application
  ### ${data.screenshot1}
  ![image](${data.image1})

  ### ${data.screenshot2}
  ![image](${data.image2})
  `;
}

/*
function personTemplate({name, hobbies, job}){
   return `<article class="person">
   <h3>${name}</h3>
   <div>
       <div>Hobbies:</div>
       <ul>
           ${hobbies.map(hobby => `<li>${hobby}</li>`).join(" ")}
       </ul>
   </div>
   <p>Current job: ${job}</p>
</article>`;
}
*/

module.exports = generateMarkdown;