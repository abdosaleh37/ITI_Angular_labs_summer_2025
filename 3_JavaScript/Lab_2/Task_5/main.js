let message = prompt("Enter the text ");

function getNumberOfWords(text){
    let arr = text.split(" ");
    return arr.length;
}

document.write(
    `<h1>Number of words in your text = ${getNumberOfWords(message)}</h1>`
);