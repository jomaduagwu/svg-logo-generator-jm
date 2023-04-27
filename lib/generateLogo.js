const circle = require('./circle.js');
const square = require('./square.js');
const triangle = require('./triangle.js');


// function that returns a shape based on which shape the user selects
function renderShape(response)  {
    if (response.shape === 'Circle'){
        let userShape = new circle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
    if (response.shape === 'Square'){
        let userShape = new square (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
    if (response.shape === 'Triangle'){
        let userShape = new triangle (response.shapeColor, response.text, response.textColor)
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
function rendertextColor(textColor) {
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
    return `
    `
}


module.exports = generateLogo;