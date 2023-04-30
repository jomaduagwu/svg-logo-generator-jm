const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');
const generateLogo = require('./lib/generateLogo');

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like?',
        choices: ['Cirlce', 'Square', 'Triangle'],
    },
    {
        type: 'list',
        name: 'shapeColor',
        message: 'Pick a shape color.',
        choices: [''],
    },
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like (it has to be 3 characters only)?',
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
        type: 'list',
        name: 'textColor',
        message: 'What color of text would you like?',
        choices: [''],
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
        writeToFile('ExampleLogo.svg', logoContent);
    });
}

// initialize app
init()