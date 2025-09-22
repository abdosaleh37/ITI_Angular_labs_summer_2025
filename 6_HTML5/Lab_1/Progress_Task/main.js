let progress = document.getElementsByTagName('progress')[0];
let span = document.getElementsByTagName('span')[1];
let counter = 0;

let interval = setInterval(function() {
    counter++;
    if(counter > 100) {
        counter = 0;
    }
    progress.value = counter;
    span.innerText = `${counter}%`;
}, 100);