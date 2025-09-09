message = prompt("Enter a text to capitalize");

function capitalizeText(text){
    let arr = text.split(" ");
    for(let i in arr){
        let firstChar = arr[i][0].toUpperCase();
        let rest = arr[i].substring(1, arr[i].length).toLowerCase();
        arr[i] = firstChar + rest;
    }
    return arr.join(" ");
}

document.write(`<h1>Capitalized text :</h1>
                <h2>${capitalizeText(message)}</h2>`);