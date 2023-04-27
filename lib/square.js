const shape = require('./shape.js');

class square extends shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }
    render() {
        return `
        <svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
        <!-- Simple rectangle -->
            <rect width="100" height="100" fill="${this.shapeColor}" />
            <text x="40" y="35" class="heavy" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
        `
};

};

module.exports = square;