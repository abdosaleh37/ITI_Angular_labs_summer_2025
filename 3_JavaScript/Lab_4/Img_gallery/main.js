const previous = document.getElementById("previous");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const next = document.getElementById("next");

const image = document.getElementsByTagName("img")[0];
let imageIndex = 1;
let interval;

let iterate = function(){
    imageIndex++;
    if(imageIndex == 5){
        imageIndex = 1;
    }
    image.src = `imgs/${imageIndex}.jpg`;
}

previous.addEventListener('click', () => {
    imageIndex--;
    if(imageIndex == 0){
        imageIndex = 4;
    }
    image.src = `imgs/${imageIndex}.jpg`;
});

next.addEventListener('click', () => {
    iterate();
});

play.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(() => {
        iterate();
    }, 500);
});

stop.addEventListener('click', () => {
    clearInterval(interval);
});