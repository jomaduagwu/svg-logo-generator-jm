const Shape = require('./shape.js');

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `
            <circle cx="50" cy="50" r="50" fill="${this.shapeColor}" />
        ` ;
}
};

module.exports = Circle;

