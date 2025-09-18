export function add(x, y) {
    return x + y;
}

export function sub(x, y) {
    return x - y;
}

export function mul(x, y) {
    return x * y;
}

export function div(x, y) {
    if (y === 0) {
        console.log("Cannot divide by zero");
    }
    else {
        return x / y;
    }
}

export function pow(x, y) {
    return x ** y;
}