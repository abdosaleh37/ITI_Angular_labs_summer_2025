var message = prompt("Enter a text to count its vowels");

function vowelsCount(text){
    let count = 0;
    for(let i = 0; i < text.length; i++){
        if("AOIEUaoieu".contains(text[i]))
            count++;
    }
    return count;
}

document.write(`<h1>Number of vowels = ${vowelsCount(message)}</h1>`);