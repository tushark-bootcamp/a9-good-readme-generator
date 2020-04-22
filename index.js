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
            message: "Choose from the below list all the softwares that will need to be installed",
            choices: [
                "npm",
                "node v12.1",
                "Gitbash"
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
            message: "Provide license details",
            choices: [
                "Node V12",
                "npm",
                "github"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Provide Contributing info"
        },
        {
            type: "input",
            name: "tests",
            message: "Provide info for Tests"
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
