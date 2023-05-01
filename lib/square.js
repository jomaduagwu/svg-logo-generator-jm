const Shape = require('./shape.js');

class Square extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }
    render() {
        return `
            <rect width="100" height="100" fill="${this.shapeColor}" />
        `;
}
};

module.exports = Square;

