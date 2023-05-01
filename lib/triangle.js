const Shape = require('./shape.js');

class Triangle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }
    render() {
        return `
        <polygon points="25, 5 62.5, 62.5 0, 62.5" fill="${this.shapeColor}" transform="translate(22.5,3)" />
        `;
    }
};

module.exports = Triangle;
