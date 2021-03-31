// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const util = require('util')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'filename',
        message: 'What is your filename?'
    },
    {
        type: 'input',
        name: 'project',
        message: 'What is the name of your application?'
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation?'
    },
    {
        type: 'input',
        name: 'purpose',
        message: 'Why did you build this project?'
    },
    {
        type: 'input',
        name: 'solution',
        message: 'What problem does it solve? (start with a verb)'
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn?'
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Enter valid contact info of your choice (Phone#, Email, other)'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a valid license',
        choices: ['MIT','Apache-2.0','gpl-3.0','ISC']
    },

];

// TODO: Create a function to write README file
function questionPrompts() {
    return inquirer
    .prompt(questions)
}
function writeToFile(fileName, data) {
    const writeFileAsync = util.promisify(fs.writeFile)
    writeFileAsync(`${fileName}.md`, generateMarkdown(data))
   
}

// TODO: Create a function to initialize app
function init() {
    questionPrompts()
        .then((data) => {
            console.log(data)
            writeToFile(data.filename, data)
        })
        .then(() => console.log('README.md sucessfully created'))
        .catch((err) => console.error(err))
}

// Function call to initialize app
init();
