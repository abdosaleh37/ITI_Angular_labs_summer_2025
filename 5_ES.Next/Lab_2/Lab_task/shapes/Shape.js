export default class Shape {
    constructor() {
        if(new.target == Shape) {
            throw Error("Cannot take object of abstract Class...");
        }
    }

    calcArea() {
        return 0;
    }
}