const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./readmefilegenerator");

const writeReadmeFileAsync = util.promisify(fs.writeFile);

function promptGithubUser() {

    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "Add heading that you want to use as the title of your project e.g. Project Title"
        },
        {
            type: "input",
            name: "description",
            message: "Add project description",
        },
        {
            type: "checkbox",
            name: "toc",
            message: "Choose required Table Of Contents from the following list",
            choices: [
                "Title",
                "Description",
                "Tests",
                "License",
                "Contributing"
            ]
        },
        {
            type: "checkbox",
            name: "installation",
            message: "Choose which of the following steps are needed to install the software",
            choices: [
                "Install Visual studio code",
                "Install npm",
                "Install node v12.1"
            ]
        },
        {
            type: "input",
            name: "usage",
            message: "Provide Usage details"
        },
        {
            type: "checkbox",
            name: "license",
            message: "Please choose the following option for Licensing policy else edit the README.md file manually after generation",
            choices: [
                "This project is licensed under the GPL 3.0 License - see the LICENSE.md file for details"
            ]
        },
        {
            type: "checkbox",
            name: "contributing",
            message: "Please choose the following option for Contributing policy else edit the README.md file manually",
            choices: [
                "Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us"
            ]
        },
        {
            type: "input",
            name: "tests",
            message: "Provide detailed steps to run automated test suite"
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
