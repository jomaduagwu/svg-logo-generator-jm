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
  This application was created to 


## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Features](#features)
  - [Tests](#tests)
  - [License](#license)


  ## Installation
  Clone the respository from the repo in GitHub. Make sure you install Node.js and NPM on your computer. You will need to install the node package manager (NPM) using `npm init` and then the inquirer module using `npm i inquirer`. Use `npm install` to install dependencies, and `npm install --save-dev-jest` to install Jest.


  ## Usage
  You can find the walkthrough video here - [logo generator walkthrough video](https://drive.google.com/file/d/---------------------/view?usp=sharing)

  ![logo generator video](./assets/.........gif)


  Run ```node index.js``` in the command line 





## Credits

  

## Features
N/A


## Tests 
Each shape is tested for render() method that returns a string for the corresponding SVG file matching color and text. `npm test` in the command line will run all the three tests.


## License
The project is licensed under MIT. For more information, please refer to the LICENSE in the repo.
  