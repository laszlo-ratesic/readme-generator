// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./src/readme-template.js");

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Give a brief description of your project:",
    "What are the installation instructions for your project?",
    "Please provide usage information:",
    "Please choose a license",
    "What are the contribution guidelines for this project?",
    "Please include relevant test instructions",
    "List any collaborators or acknowledgements:",
    "Enter your GitHub username:",
    "Please enter your email address:",
    "Please enter a full name for the copyright:"
];

const licenses = [
    'MIT',
    'Apache-2.0',
    'GPL-3.0',
    'LGPL-3.0',
    'BSD-3-Clause',
    'GPL-2.0'
];

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/README.md", data, (err) => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "README created!"
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0]
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1]
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2]
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3]
        },
        {
            type: 'list',
            name: 'license',
            message: questions[4],
            choices: licenses
        },
        {
            type: 'input',
            name: 'contributing',
            message: questions[5]
        },
        {
            type: 'input',
            name: 'tests',
            message: questions[6]
        },
        {
            type: 'input',
            name: 'credits',
            message: questions[7]
        },
        {
            type: 'input',
            name: 'github',
            message: questions[8]
        },
        {
            type: 'input',
            name: 'email',
            message: questions[9]
        },
        {
            type: 'input',
            name: 'fullName',
            message: questions[10]
        }
    ])
}

// Function call to initialize app
init()
    .then((data) => {
        return generateMarkdown(data);
    })
    .then((markdown) => {
        return writeToFile(markdown);
    })
    .catch((err) => {
        console.log(err);
    });
