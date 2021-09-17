'use strict';

const artistname = document.querySelector('.artist_name');
const songName = document.querySelector('.song_name');

const image = document.querySelector('img');
const audio = document.querySelector('audio');

const prev = document.querySelector('.prev');
const playbtn = document.querySelector('.playbtn');
const next = document.querySelector('.next');

let currentSong = 0;
let playPause = false;

const songs = [
  {
    src: '../music/cry.mp3',
    name: 'Dee',
    yourSongName: 'Cry',
  },
  {
    src: '../music/Demon - Dee.mp3',
    name: 'Dee',
    yourSongName: 'Demon',
  },
  {
    src: '../music/new trap beats.mp3',
    name: 'Dee',
    yourSongName: '[Free] Freestyle rap beats',
  },
  {
    src: '../music/trap bass.mp3',
    name: 'Dee',
    yourSongName: '[Free] Freestyle rap beats',
  },
];

const loadUiFuntion = function () {
  artistname.textContent = songs[currentSong].name;
  songName.textContent = songs[currentSong].yourSongName;
  audio.src = songs[currentSong].src;
};

const playMusicNow = function () {
  playPause = true;

  audio.play();
  playbtn.classList.replace('fa-play', 'fa-pause');
};

const pauseMusicNow = function () {
  playPause = false;
  audio.pause();
  playbtn.classList.replace('fa-pause', 'fa-play');
};

playbtn.addEventListener('click', function () {
  if (!playPause) {
    playMusicNow();
  } else {
    pauseMusicNow();
  }
});

// Prev and Next songs load
next.addEventListener('click', function () {
  currentSong = (currentSong + 1) % songs.length;
  console.log(currentSong);
  artistname.textContent = songs[currentSong].name;
  songName.textContent = songs[currentSong].yourSongName;
  audio.src = songs[currentSong].src;
});

prev.addEventListener('click', function () {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  console.log(currentSong);
  artistname.textContent = songs[currentSong].name;
  songName.textContent = songs[currentSong].yourSongName;
  audio.src = songs[currentSong].src;
});

// Load songs funtion
loadUiFuntion();
