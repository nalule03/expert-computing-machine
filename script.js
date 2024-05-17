// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now_playing"),
 track_art = document.querySelector(".track_art"),
 track_name = document.querySelector(".track_name"),
 track_artist = document.querySelector(".track_artist"),

 //
 trackImage = document.querySelector(".track-image"),
 title = document.querySelector(".title"),
 artist = document.querySelector(".artist"),

//
 repeat_btn = document.querySelector(".repeat"),
 next_btn = document.querySelector(".next_btn"),
 playPause__btn = document.querySelector(".playPause"),
 prev_btn = document.querySelector(".prev_btn"),
 shuffle_btn = document.querySelector(".shuffle"),

//
 seek_slider = document.querySelector(".seek_slider"),
 volume_slider = document.querySelector(".volume_slider"),
 curr_time = document.querySelector(".current_time"),
 total_duration = document.querySelector(".total_duration");


 let timer;
 let autoplay = 0;
 let indexTrack = 0;
 let songIsPlaying  = false;
 let isShuffling = false;
 let song = document.getCreateElement("audio");

 //All eventsListeners
 play.addEventListener('click', playSong);

 //first step
 //Load Track
 function loadTrack(indexTrack){
    track_art.src = trackList[indexTrack].path;
    trackImage.src =  trackList[indexTrack].image;
    title.innerHTML = trackList[indexTrack].name;
    artist.innerHTML  = trackList[indexTrack].artist;
    trackImage.load()
 }

 //use this as argument
 loadTrack(indexTrack); 

 //play song
 function playSong(){
    track.play();
     songIsPlaying = true;
     play.innerHTML = '<i class="fa fa-pause"></i>';


 }