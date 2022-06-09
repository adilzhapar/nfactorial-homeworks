let artist = document.querySelector("#artist");
let name = document.querySelector("#track-name");
let video = document.querySelector("#video");

let playPauseBtn = document.querySelector(".play");  
let nextBtn = document.querySelector(".forward");
let prevBtn = document.querySelector(".backward");
let mute = document.querySelector(".mute");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let ttl_duration = document.querySelector(".total-duration");

let isPlaying = false;
let trackIndex = 0;
let updateTimer;
let vol;
let isMuted = false;

let curr_track = document.createElement('audio');

let track_list = [
    {
        name: "Lose yourself",
        artist: "Eminem",
        video: "mp4/lose-yourself.mp4",
        audio: "mp3/lose-yourself.mp3"
    },
    {
        name: "Next episode",
        artist: "Dr.dre & Snoop Dogg",
        video: "mp4/next-episode.mp4",
        audio: "mp3/next-episode.mp3"

    },
    {
        name: "In da club",
        artist: "50 Cent",
        video: "mp4/in-da-club.mp4",
        audio: "mp3/in-da-club.mp3"
    },
];


const loadTrack = (trackIndex) => {
    clearInterval(updateTimer);
    resetValues();
    curr_track.src = track_list[trackIndex].audio;
    curr_track.load();

    video.src = track_list[trackIndex].video;
    name.textContent = track_list[trackIndex].name;
    artist.textContent = track_list[trackIndex].artist;

    updateTimer = setInterval(seekUpdate, 1000);
    curr_track.addEventListener("ended", nextTrack);
}

const resetValues = () => {
    curr_time.textContent = "00:00";
    ttl_duration.textContent = "00:00";
    seek_slider.value = 0;
}

loadTrack(trackIndex);

function playpauseTrack() {
    if (!isPlaying) playTrack();
    else pauseTrack();
}

function playTrack() {
    curr_track.play();
    isPlaying = true;
    playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    video.play();
}

function pauseTrack() {
    curr_track.pause();
    video.pause();
    isPlaying = false;
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play">'
}

function nextTrack() {
    if (trackIndex < track_list.length - 1)
      trackIndex++;
    else trackIndex = 0;
    loadTrack(trackIndex);
    playTrack();
  }
  
function prevTrack() {
    if (trackIndex > 0)
      trackIndex--;
    else trackIndex = track_list.length;
    loadTrack(trackIndex);
    playTrack();
}

function muteUnmute() {
    if(!isMuted){
        muting();
    }else{
        unmuting();
    }
}

function muting() {
    vol = volume_slider.value;
    volume_slider.value = "1";
    curr_track.volume = volume_slider.value /  100;
    mute.innerHTML = `<i class="fa-solid fa-volume-up"></i>`;
    isMuted = true;
}

function unmuting(){
    isMuted = false;
    volume_slider.value = vol;
    curr_track.volume = volume_slider.value / 100;
    mute.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
}



function seekTo() {
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}

function setVolume() {
    curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
    let seekPosition = 0;
  
    if (!isNaN(curr_track.duration)) {
      seekPosition = curr_track.currentTime * (100 / curr_track.duration);
  
      seek_slider.value = seekPosition;
  
      let currentMinutes = Math.floor(curr_track.currentTime / 60);
      let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
      let durationMinutes = Math.floor(curr_track.duration / 60);
      let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
  
      if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
      if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
      if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
      if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
  
      curr_time.textContent = currentMinutes + ":" + currentSeconds;
      ttl_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}

