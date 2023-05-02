const inquirer = require("inquirer");
const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');


// function that returns a shape based on which shape the user selects
function renderShape(response)  {
    if (response.shape === 'Circle'){
        let userShape = new Circle (response.text, response.textColor, response.shapeColor)
        return userShape.render()
    }
    if (response.shape === 'Square'){
        let userShape = new Square (response.text, response.textColor, response.shapeColor)
        return userShape.render()
    }
    if (response.shape === 'Triangle'){
        let userShape = new Triangle (response.text, response.textColor, response.shapeColor)
        return userShape.render()
    }
}



// function to generate logo
function generateLogo(data) {
    const shape = renderShape(data);
   
    
    return `
    <svg width="300" height="200">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    ${shape}
    <text x="50" y="50" text-anchor="middle" fill="${data.textColor}">
      ${data.text}
    </text>
    </svg>
    
`;
}


module.exports = generateLogo;