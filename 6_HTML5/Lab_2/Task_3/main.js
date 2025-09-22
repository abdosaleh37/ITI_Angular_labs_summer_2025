let canvas = document.querySelector('canvas');
let change = document.getElementById('change');
let color = document.getElementById('palette');

let context = canvas.getContext('2d');

change.addEventListener('click', function() {
    context.clearRect(0, 0, 500, 500);
    for(let i = 0; i < 50; i++) {
        context.beginPath();
        context.strokeStyle = color.value;
        context.arc(Math.random()*500, Math.random()*500, 30, 0, 2*Math.PI)
        context.stroke()
    }

})