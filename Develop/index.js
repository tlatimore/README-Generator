import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
import path from 'path';

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Write a brief description of your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What information can you provide about the usage of your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What instructions can you provide for contributing to your project?',
    },
    {
        type: 'input',
        name: 'projectTests',
        message: 'What command should be run for testing?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run for installation?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }


];

// Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) =>
    {
     console.log('Generating your professional README...');
     writeToFile('README.md', generateMarkdown({...responses}));
    });
}

// Function call to initialize app
init();
