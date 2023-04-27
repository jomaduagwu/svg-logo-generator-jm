const shape = require(s='./shape.js');

class triangle extends shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }
    render() {
        return `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,100 50,25 50,75 100,0" fill="${this.shapeColor}" />
            <text x="40" y="35" class="heavy" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
};

};

module.exports = triangle;