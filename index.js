const inquirer = require("inquirer");
const fs = require("fs");
const util = require("fs");

const writeReadmeFileAsync = util.promisify(fs.writeFile);


const questions = [
    {
        "sectionInfo": {
            "name": "titleTitle",
            "message": "Add heading that you want as the title of your project e.g. Project Title",
            "style": "#"
        }

    },
    {
        "sectionInfo": {
            "name": "titleDesc",
            "message": "Enter title for adding project description e.g. Description",
            "type": "input",
            "style": "##"
        }

    },
    {
        "sectionInfo": {
            "name": "inputDesc",
            "message": "Add project description",
            "type": "input",
            "style": ""
        }
    },
    {
        "sectionInfo": {
            "name": "titleTOC",
            "message": "Add title for your TOC e.g. Table of Content",
            "type": "input",
            "style": "##"
        }
    },
    {
        "sectionInfo": {
            "name": "titleInstallation",
            "message": "Add title for Installation e.g. Installation",
            "type": "input",
            "style": "##"
        }
    },
    {
        "sectionInfo": {
            "name": "inputInstallation",
            "message": "Provide installation details",
            "type": "input",
            "style": ""
        }
    },
    {
        "sectionInfo": {
            "name": "titleUsage",
            "message": "Add title for Usage e.g. Usage",
            "type": "input",
            "style": "##"
        }
    },
    {
        "sectionInfo": {
            "name": "inputUsage",
            "message": "Provide Usage details",
            "type": "input",
            "style": ""
        }
    },
    {
        "sectionInfo": {
            "name": "titleLicense",
            "message": "Add title for License e.g. License Info",
            "type": "input",
            "style": "##"
        }
    },
    {
        "sectionInfo": {
            "name": "inputLicense",
            "message": "Provide license details",
            "type": "input",
            "style": ""
        }
    },
    {
        "sectionInfo": {
            "name": "titleContributing",
            "message": "Add title for Contributing e.g. Contributing Info",
            "type": "input",
            "style": "##"
        }
    },
    {
        "sectionInfo": {
            "name": "inputContributing",
            "message": "Provide Contributing info",
            "type": "input",
            "style": ""
        }
    },
    {
        "sectionInfo": {
            "name": "titleTests",
            "message": "Add title for Tests e.g. Tests",
            "type": "input",
            "style": "##"
        }
    },
    {
        "sectionInfo": {
            "name": "inputTests",
            "message": "Provide info for Tests",
            "type": "input",
            "style": ""
        }
    },
    {
        "sectionInfo": {
            "name": "titleQuestions",
            "message": "Add title for Questions e.g. Questions",
            "type": "input",
            "style": "##"
        }
    },
    {
        "sectionInfo": {
            "name": "inputGitHubProfilePic",
            "message": "Provide Github profile pic",
            "type": "input",
            "style": ""
        }
    },
    {
        "sectionInfo": {
            "name": "inputGithubEmail",
            "message": "Provide github email address",
            "type": "input",
            "style": ""
        }
    }
];

function promptGithubUser() {
    questions.forEach(question => {
        return inquirer.prompt([
            {
                type: "input",
                name: question.name,
                message: question.message
            }
        ])
    });

}

function generateMarkdown(data) {
    return `
  # ${data.titleTitle}
  ##${data.titleDesc}
  ${data.inputDesc}
  ## ${data.titleTOC}
  ## ${data.titleInstallation}
  ${data.inputInstallation}
  ## ${data.titleUsage}
  ${data.inputUsage}
  ## ${data.titleLicense}
  ${data.inputLicense}
  ## ${data.titleContributing}
  ${data.inputContributing}
  ## ${data.titleTests}
  ${data.inputTests}
  ## ${data.titleQuestions}
  * ${data.inputGitHubProfilePic}
  * ${data.inputGithubEmail}
  `;
}

promptUser()
    .then(function (data) {
        const html = generateMarkdown(data);

        return writeReadmeFileAsync("readme.md", md);
    })
    .then(function () {
        console.log("Successfully wrote to readme.md");
    })
    .catch(function (err) {
        console.log(err);
    });
