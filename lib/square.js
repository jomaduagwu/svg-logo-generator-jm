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

// {/* <svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
// <!-- Simple rectangle -->
//     <rect width="100" height="100" fill="${this.shapeColor}" />
//     <text x="40" y="35" class="heavy" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
// </svg> */}