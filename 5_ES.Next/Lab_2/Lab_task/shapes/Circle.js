import Shape from "./Shape.js";

export default class Circle extends Shape {
    #radius = 0
    constructor(_radius) {
        super();
        this.Radius = _radius;
    }

    get Radius () { return this.#radius; }

    set Radius (_val) {
        if(_val > 0)
            this.#radius = _val;
    }

    calcArea() {
        return Math.PI * this.Radius * this.Radius;
    }
}