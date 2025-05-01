let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;

}
function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");

    }
    else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}
if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}
const progressBar = document.getElementById('progress-bar');
const menuBtn = document.getElementById('menu-btn');
const playlist = document.getElementById('playlist');

// Toggle playlist when progress bar is clicked
progressBar.addEventListener('click', () => {
  playlist.style.display = playlist.style.display === 'none' ? 'block' : 'none';
});

// Or toggle with menu button
menuBtn.addEventListener('click', () => {
  playlist.style.display = playlist.style.display === 'none' ? 'block' : 'none';
});
