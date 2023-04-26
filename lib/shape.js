class shape {
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        
}
};


// constructor shape is exported from the file
module.exports = shape;

//The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. While not a requirement, it is 
//recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use 
//inheritance to reuse the code in the child classes.
