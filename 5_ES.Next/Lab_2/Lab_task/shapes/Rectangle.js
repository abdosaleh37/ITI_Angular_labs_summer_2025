import Shape from "./Shape.js";

export default class Rectangle extends Shape {
    #width = 0
    #height = 0   
    constructor(_width, _height) {
        super();
        this.Width = _width;
        this.Height = _height;
    }

    get Width () { return this.#width; }

    set Width (_val) {
        if(_val > 0)
            this.#width = _val;
    }

    get Height () { return this.#height; }

    set Height (_val) {
        if(_val > 0)
            this.#height = _val;
    }
    calcArea() {
        return this.Width * this.Height;
    }
}