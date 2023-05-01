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

// function that returns shape color based on which shape color the user selects
function renderShapeColor(shapeColor) {
    if (shapeColor === ''){
        return
    }
    if (shapeColor === ''){
        return
    }
    if (shapeColor === ''){
        return
    }
    if (shapeColor === ''){
        return
    }
    if (shapeColor === ''){
        return
    }
}

// function that returns text color based on which text color the user selects
function renderTextColor(textColor) {
    if (textColor === 'White'){
        return
    }
    if (textColor === 'Black'){
        return 
    }
    if (textColor === ''){
        return
    }
}

// function to generate logo
function generateLogo(data) {
    const shape = renderShape(data);
    const shapeColor = renderShapeColor(data.shapeColor);
    const textColor = renderTextColor(data.textColor);
    
    return `
    <svg width="100" height="100">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    ${shape}
    <text x="50" y="50" text-anchor="middle" fill="${data.textColor}">
      ${data.text}
    </text>
    </svg>
    
`;
}


module.exports = generateLogo;