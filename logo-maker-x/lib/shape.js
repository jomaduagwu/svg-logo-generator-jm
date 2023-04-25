class shape {
    constructor(text, textColor, shapeColor, shape, width, height, stroke, fill, strokeWidth){
        this.name = name;
        this.shape = shape;
        this.width = width;
        this.height = height;
        this.stroke = stroke;
        this.fill = fill;
        this.strokeWidth = strokeWidth;
}
}

class triangle extends shape {
    constructor (width, height, stroke, fill, strokeWidth, points){
    }
    // should use polygon
}


class circle extends shape {
    constructor (stroke, fill, strokeWidth, cx, cy, r){
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }
}



class square extends shape {
    constructor(stroke, fill, strokeWidth, x, y){
        this.x = x;
        this.y = y;
}
// can use polygon
}

// constructor shape is exported from the file
module.exports = shape;

//The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. While not a requirement, it is 
//recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use 
//inheritance to reuse the code in the child classes.
