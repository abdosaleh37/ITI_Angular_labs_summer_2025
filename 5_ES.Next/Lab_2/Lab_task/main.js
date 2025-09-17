import Shape from "./shapes/Shape.js";
import Rectangle from "./shapes/Rectangle.js";
import Triangle from "./shapes/Triangle.js";
import Circle from "./shapes/Circle.js";

let shapes = [
    new Rectangle(5, 6), 
    new Triangle(6, 8), 
    new Circle(7), 
    /*new Shape()*/
];

for(let shape of shapes){
    console.log(`Area of the shape = ${shape.calcArea()}`);
}
