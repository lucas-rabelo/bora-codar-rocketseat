// music content
const bannerMusic = document.querySelector("#banner-music");
const titleMusic = document.querySelector("#title-music");
const bandMusic = document.querySelector("#band-music");
const audioMusic = document.querySelector("#audio-music");

// funcionalidades
const buttonPlay = document.querySelector('#play');
const buttonPlayBack = document.querySelector('#play-back');
const buttonPause = document.querySelector('#pause');
const buttonPlayForward = document.querySelector('#play-forward');
const progressBar = document.querySelector("#progress-bar");

const timeRemainingDisplay = document.querySelector("#time-remaining");
const timeElapsedDisplay = document.querySelector("#time-elapsed");

let id = 0;

const MUSICS = [
    {
        album: "./assets/images/m1.png",
        music: "Musica 01",
        banda: "Banda Rocketseat",
        audio: "./assets/music/m1.mp3",
    },
    {
        album: "./assets/images/m2.png",
        music: "Musica 02",
        banda: "Banda Rocketseat",
        audio: "./assets/music/m2.mp3",
    },
    {
        album: "./assets/images/m3.png",
        music: "Musica 03",
        banda: "Banda Rocketseat",
        audio: "./assets/music/m3.mp3",
    },
]

function resetMusic() {
    progressBar.style.width = (0 * 100) + "%";
  
    buttonPause.classList.add('hide');
    buttonPlay.classList.remove('hide');

    getMusic();
}

function getMusic() {
    bannerMusic.src = MUSICS[id].album;
    audioMusic.src = MUSICS[id].audio;
    titleMusic.innerText = MUSICS[id].music;
    bandMusic.innerText = MUSICS[id].banda;
}

getMusic();

function backMusic() {
    id = id - 1;
    resetMusic();
}

function forwardMusic() {
    id = id + 1;
    resetMusic();
}

buttonPlay.addEventListener("click", function () {
    audioMusic.play();
    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide');
});

buttonPause.addEventListener("click", function () {
    audioMusic.pause();
    buttonPause.classList.add('hide');
    buttonPlay.classList.remove('hide');
});

buttonPlayBack.addEventListener("click", backMusic);
buttonPlayForward.addEventListener("click", forwardMusic);

// time progress bar

function updateTimeRemaining() {
    const timeRemaining = audioMusic.duration - audioMusic.currentTime;
  
    let minutes = Math.floor(timeRemaining / 60);
    minutes = String(minutes).padStart(2, "0");
  
    let seconds = (timeRemaining % 60).toFixed(0);
    seconds = String(seconds).padStart(2, "0");
  
    timeRemainingDisplay.textContent = `${minutes}:${seconds}`;
}

function updateTimeElapsed() {
    const timeElapsed = audioMusic.currentTime;
  
    let minutes = Math.floor(timeElapsed / 60);
    minutes = String(minutes).padStart(2, "0");
  
    let seconds = (timeElapsed % 60).toFixed(0);
    seconds = String(seconds).padStart(2, "0");
  
    timeElapsedDisplay.textContent = `${minutes}:${seconds}`;
}

audioMusic.addEventListener(
    "timeupdate",
    updateTimeRemaining,
    updateTimeElapsed
);

setInterval(updateTimeRemaining, 1000);
setInterval(updateTimeElapsed, 1000);

audioMusic.addEventListener("timeupdate", function() {
    const progress = audioMusic.currentTime / audioMusic.duration;
    progressBar.style.width = (progress * 100) + "%";
});