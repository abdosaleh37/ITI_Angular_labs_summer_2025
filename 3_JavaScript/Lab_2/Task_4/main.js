let message = prompt("Enter the text ");
let char = prompt("Enter the character ");

function getOccuranceCount(text, ch){
    let count = 0;
    for(let i = 0; i < text.length; i++){
        if(text[i] == ch)
            count++;
    }
    return count;
}

document.write(
    `<h1>Number of occurance of char ${char} in your text = ${getOccuranceCount(message, char)}</h1>`
);