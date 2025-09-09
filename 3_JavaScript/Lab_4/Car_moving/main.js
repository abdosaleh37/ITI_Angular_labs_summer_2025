const forward = document.getElementById("forward");
const back = document.getElementById("back");
const car = document.getElementById("car");

let interval;
let position = 0;

forward.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(() => {
        position += 10;

        if((position + car.offsetWidth) > window.innerWidth){
            clearInterval(interval);
        }
        else{
            car.style.left = `${position}px`;
        }
        
    }, 20);
});

back.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(() => {
        position -= 10;
        
        if(position < 0){
            clearInterval(interval);
        }
        else{
            car.style.left = `${position}px`;
        }

    }, 20);
});