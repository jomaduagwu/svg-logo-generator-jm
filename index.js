const inquirer = require('inquirer');
const fs = require('fs');
// const questions = require('./lib/questions.js');
const generateLogo = require('./lib/generateLogo');

// need to import individidual shape files?

// question prompts for the user's input
const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like?',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        // message: 'Select a color for the shape',
        message: 'Enter a color for the shape - either a keyword or hexadecimal number.',
        // choices: [''],
    },
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like for your logo (it has to be 3 characters only)?',
        validate: function (value) {
            if (value.length > 3) {
                return "Please enter only 3 characters.";
            } else {
                if (value.length < 3) {
                    return "Please enter up to 3 characters.";
                };
                return true;
            }
        }
    },
    {
        // type: 'list',
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for the text - either a keyword or hexadecimal number.',
        // message: 'What color of text would you like?',
        // choices: [''],
    }
    
];

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
        writeToFile('./examples/ExampleLogo.svg', logoContent);
    });
}

console.log(generateLogo);
// initialize app
init()