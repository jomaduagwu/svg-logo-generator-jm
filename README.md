User Story
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

# Logo Generator


## Description
  This application was created to enable freelance web developers to generate simple logos without having to go through a graphic designer. It takes in user input - color, shape, and text, to generate a logo and save as an svg file.  


## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Features](#features)
  - [Tests](#tests)
  - [License](#license)


  ## Installation
  Clone the respository from the repo in GitHub. Make sure you install Node.js and NPM on your computer. You will need to install the node package manager (NPM) using `npm init` and then the inquirer v8.2.4 module using `npm i inquirer@8.2.4`. Use `npm install` to install dependencies, and `npm install --save-dev-jest` to install Jest as a devDependency. 


  ## Usage
  You can find the walkthrough video here - [logo generator walkthrough video](https://drive.google.com/file/d/10rrPpqKq-rbmrdPNkO2JhKBC775jMrPP/view?usp=sharing)

  Start by opening the file in the terminal. Type `node index.js` and answer the series of questions about the type of logo you want. You will need to enter 3 characters for the logo text. Once all prompts have been answered, the new logo will be generated in the examples folder with the name 'ExampleLogo.svg'.

  ![logo generator video](./assets/.........gif)




[triangle logo](./examples/triangle-sample-logo.png)



## Credits
 [classes extends](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
 [svg](https://developer.mozilla.org/en-US/docs/Web/SVG)
  

## Features
Node.js
NPM 
NPM Inquirer
Jest


## Tests 
Each shape (Circle, Square, and Triange) is tested for a render() method that returns a string for the corresponding SVG file matching color and text selection. Type `npm test` in the command line to run all the three tests.


## License
The project is licensed under MIT. For more information, please refer to the LICENSE in the repo.
  