let audio = document.querySelector('audio');
let image = document.querySelector('img');
let title = document.getElementById("title");

let timeRange = document.getElementById('time-range');
let currentTime = document.getElementById('current-time');
let totalTime = document.getElementById('total-time');

let volumeRange = document.getElementById('volume-range');
let volumeValue = document.getElementById('volume-value');
let volumeBtn = document.getElementById('volumeBtn');

let backwardBtn = document.getElementById('backwardBtn');
let playBtn = document.getElementById('playBtn');
let pauseBtn = document.getElementById('pauseBtn');
let stopBtn = document.getElementById('stopBtn');
let forwardBtn = document.getElementById('forwardBtn');

let playlist = [
    {title: "Dari Ya 2lby", source: "music/Dari_Ya_2lby.mp3", image: "images/Dari_Ya_2lby.png"},
    {title: "E7lam Ma3aya", source: "music/E7lam_Ma3aya.mp3", image: "images/E7lam_Ma3aya.png"},
    {title: "Elkessa Welly Kan", source: "music/ElKessa_Welly_Kan.mp3", image: "images/Elkessa_Welly_Kan.png"},
    {title: "Fady Shewia", source: "music/Fady_Shewia.mp3", image: "images/Fady_Shewia.png"},
    {title: "Insan", source: "music/Insan.mp3", image: "images/Insan.png"}
];
let counter = 0;
let currentVolume = 50;
loadAudio(counter);

playBtn.addEventListener('click', function() {
    audio.play();
});

pauseBtn.addEventListener('click', function() {
    audio.pause();
});

stopBtn.addEventListener('click', function() {
    audio.pause();
    audio.currentTime = 0;
});

forwardBtn.addEventListener('click', function() {
    counter++;
    if(counter > playlist.length - 1) {
        counter = 0;
    }
    loadAudio(counter);
});

backwardBtn.addEventListener('click', function() {
    counter--;
    if (counter < 0) {
        counter = playlist.length - 1;
    }
    loadAudio(counter);
});

audio.addEventListener('loadedmetadata', function() {
    timeRange.max = audio.duration;
    let minutes = Math.floor(audio.duration / 60);
    let seconds = Math.floor(audio.duration % 60);
    totalTime.innerHTML = `${(minutes > 9) ? minutes : `0${minutes}`}:${(seconds > 9) ? seconds : `0${seconds}`}`;
});

audio.addEventListener('timeupdate', function () {
    timeRange.value = audio.currentTime;
    let minutes = Math.floor(audio.currentTime / 60);
    let seconds = Math.floor(audio.currentTime % 60);
    currentTime.innerHTML = `${(minutes > 9) ? minutes : `0${minutes}`}:${(seconds > 9) ? seconds : `0${seconds}`}`;
});

timeRange.addEventListener('change', function () {
    audio.currentTime = timeRange.value;
    audio.play();
});

volumeBtn.addEventListener('click', function() {
    if(audio.muted) {
        volumeBtn.className = "fa-solid fa-volume-high";
        audio.muted = false;
        volumeValue.innerHTML = currentVolume;
        volumeRange.value = currentVolume;
        audio.volume = volumeRange.value / 100;
    }
    else {
        volumeBtn.className = "fa-solid fa-volume-xmark";
        audio.muted = true;
        volumeValue.innerHTML = 0;
        volumeRange.value = 0;
    }
});

volumeRange.addEventListener('change', function() {
    if(volumeRange.value == 0) {
        volumeBtn.className = "fa-solid fa-volume-xmark";
        audio.muted = true;
    }
    else {
        volumeBtn.className = "fa-solid fa-volume-high";
        audio.muted = false;
    }
    currentVolume = volumeRange.value;
    audio.volume = volumeRange.value / 100;
    volumeValue.innerHTML = volumeRange.value;
});

function loadAudio(counter) {
    image.src = playlist[counter].image;
    audio.src = playlist[counter].source;
    title.innerHTML = playlist[counter].title;
    audio.volume = currentVolume / 100;
    volumeRange.value = currentVolume;
    volumeValue.innerHTML = currentVolume;
    audio.play();
}