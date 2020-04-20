const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeReadmeFileAsync = util.promisify(fs.writeFile);

function promptGithubUser() {

    return inquirer.prompt([
        {
            type: "input",
            name: "titleTitle",
            message: "Add heading that you want as the title of your project e.g. Project Title"
        },
        {
            type: "input",
            name: "titleDesc",
            message: "Enter title for adding project description e.g. Description"
        },
        {
            type: "input",
            name: "inputDesc",
            message: "Add project description",
        },
        {
            type: "input",
            name: "titleTOC",
            message: "Add title for your TOC e.g. Table of Content"
        },
        {
            type: "input",
            name: "titleInstallation",
            message: "Add title for Installation e.g. Installation"
        },
        {
            type: "input",
            name: "inputInstallation",
            message: "Provide installation details"
        },
        {
            type: "input",
            name: "titleUsage",
            message: "Add title for Usage e.g. Usage",
        },
        {
            type: "input",
            name: "inputUsage",
            message: "Provide Usage details"
        },
        {
            type: "input",
            name: "titleLicense",
            message: "Add title for License e.g. License Info"
        },
        {
            type: "input",
            name: "inputLicense",
            message: "Provide license details"
        },
        {
            type: "input",
            name: "titleContributing",
            message: "Add title for Contributing e.g. Contributing Info"
        },
        {
            type: "input",
            name: "inputContributing",
            message: "Provide Contributing info"
        },
        {
            type: "input",
            name: "titleTests",
            message: "Add title for Tests e.g. Tests"
        },
        {
            type: "input",
            name: "inputTests",
            message: "Provide info for Tests"
        },
        {
            type: "input",
            name: "titleQuestions",
            message: "Add title for Questions e.g. Questions"
        },
        {
            type: "input",
            name: "inputGitHubProfilePic",
            message: "Provide Github profile pic"
        },
        {
            type: "input",
            name: "inputGithubEmail",
            message: "Provide github email address"
        }
    ]);
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

promptGithubUser()
    .then(function (data) {
        const readme = generateMarkdown(data);

        return writeReadmeFileAsync("readme.md", readme);
    })
    .then(function () {
        console.log("Successfully wrote to readme.md");
    })
    .catch(function (err) {
        console.log(err);
    });
