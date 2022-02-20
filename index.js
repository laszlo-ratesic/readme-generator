// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Give a brief description of your project:",
    "What are the installation instructions for your project?",
    "Please provide usage information:",
    "Would you like to include a screenshot?",
    "List any collaborators or acknowledgmenets:",
    "Please choose a license",
    "What are the contribution guidelines for this project?",
    "Please include relevant test instructions",
    "Enter your GitHub username:",
    "Please enter your email address:"
];

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/README.md", JSON.stringify(data), (err) => {
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
        }
    ])
}

// Function call to initialize app
init()
    .then((data) => {
        return writeToFile(data);
    })
    .catch((err) => {
        console.log(err);
    });
