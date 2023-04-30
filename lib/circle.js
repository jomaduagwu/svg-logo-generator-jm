const Shape = require('./shape.js');

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="${this.shapeColor}" />
            <text x="40" y="35" class="heavy" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
}

};

module.exports = Circle;