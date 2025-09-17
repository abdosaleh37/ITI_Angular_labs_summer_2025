import Shape from "./Shape.js";

export default class Triangle extends Shape {
    #base = 0
    #height = 0
    constructor(_base, _height) {
        super();
        this.Base = _base;
        this.Height = _height;
    }

    get Base () { return this.#base; }

    set Base (_val) {
        if(_val > 0)
            this.#base = _val;
    }

    get Height () { return this.#height; }

    set Height (_val) {
        if(_val > 0)
            this.#height = _val;
    }

    calcArea() {
        return 0.5 * this.Base * this.Height;
    }
}