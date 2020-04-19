const inquirer = require("inquirer");
const fs = require("fs");
const util = require("fs");

const writeReadmeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        "sectionInfo": {
            "key": "title",
            "Title": "Enter title for the project"
        }

    },
    {
        "sectionInfo": {
            "key": "description",
            "Title": "Provide Description of your project"
        }
    },
    {
        "sectionInfo": {
            "key": "toc",
            "Title": "",
            "subSection": {
                "noOfSubSections": "Enter number of TOCs",
                "subSections": [
                    {
                        "keySub": "",
                    }
                ]
            }
        }
    },
    {
        "sectionInfo": {
            "key": "usage",
            "Title": "Provide details for the Usage"
        }
    },
    {
        "sectionInfo": {
            "key": "license",
            "Title": "Provide the license details for your project"
        }
    },
    {
        "sectionInfo": {
            "key": "contributions",
            "Title": "Add Contributons"
        }
    }
];


function promptGithubUser() {
    questions.forEach(question => {
        return inquirer.prompt([
            {
                type: "input",
                name: question.sectionName,
                message: question.sectionTitle
            }
        ])
    });

}

function generateMarkdown(data) {
    return `
  ## ${data.title}
  ## ${data.description}
  ## ${data.title}
  
  `;
}

module.exports = generateMarkdown;
