const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');
const generateLogo = require('./lib/generateLogo');

// const main = new questions();

// main.run();

// create svg logo file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err  ? console.log(err)  : console.log('Successfully created new logo!')
    );
}


// function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const logoContent = generateLogo(data);
        writeToFile('ExampleLogo.svg', logoContent);
    });
}

// initialize app
init()