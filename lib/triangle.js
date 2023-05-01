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

// `
//         <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//             <polygon points="150,18 244, 182 56, 182" fill="${this.shapeColor}" />
//             <text x="40" y="35" class="heavy" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
//         </svg>
//         `