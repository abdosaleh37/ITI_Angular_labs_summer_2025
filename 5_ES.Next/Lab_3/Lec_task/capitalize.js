export function capitalize(str) {
    let arr = str.split(" ");

    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    let newStr = arr.join(" ");
    return newStr;
}

