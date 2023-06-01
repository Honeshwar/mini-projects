const video = document.querySelector('video');
const wrapperContainer = document.querySelector(".wrapper");
const progressBar = document.querySelector(".progressBar");
const progress = document.querySelector(".progressBar .progress");
const start = document.querySelector(".controls1 span:nth-of-type(1)");
const end = document.querySelector(".controls1 span:nth-of-type(2)");
const backward = document.querySelector(".controls2 i:nth-of-type(1)");
const play = document.querySelector(".controls2 i:nth-of-type(2)");
const forward = document.querySelector(".controls2 i:nth-of-type(3)");

const speed = document.querySelector(".controls3 i:nth-of-type(1)");
const pictureInPicture = document.querySelector(".controls3 i:nth-of-type(2)");
const fullScreen = document.querySelector(".controls3 i:nth-of-type(3)");

const progressBox = document.querySelector(".progressBox");
const largePlayBtnBox = document.querySelector(".largePlayBtn");
const largePlayBtn = document.querySelector(".largePlayBtn i");
const volume = document.querySelector(".controls1 input");

let count=0;
let videos=[
    {
        src:"./assets/video/161884 (Original).mp4"
    },
    {
        src:"./assets/video/cliff_-_1890 (1080p).mp4"
    },
    {
        src:"./assets/video/islands_-_2119 (Original).mp4"
    }
]

//video setup
video.src=videos[count].src;


play.onclick=playVideo;

function playVideo(){
    if(play.classList[1] === "fa-play"){
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
        largePlayBtn.classList.remove('fa-play');
        video.play();
    }else{
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
        largePlayBtn.classList.add('fa-play');
        video.pause();
    }
}

//forward play
forward.onclick=function(){
    // if(count===video.length-1){
    //     count=0;
    // }else{
    //     count++;
    // }
    progress.style.width="0%";

    count===videos.length-1?count=0:count++;
    video.src=videos[count].src;
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
    video.play();
    

}

//backward play
backward.onclick=function(){
    progress.style.width="0%";
    count===0?count=videos.length-1:count--;
    video.src=videos[count].src;

    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
    video.play();
    
}

//fullscreen
fullScreen.onclick = full;
function full(){
    video.requestFullscreen();//promise return
}

//Picture In Picture
pictureInPicture.onclick = pip;
function pip(){
    video.requestPictureInPicture();//promise return
}

//rate of video
speed.onclick = rate;
function rate(){
    document.querySelector('.dropdown').style.display="flex";
}

const li = document.querySelectorAll('.dropdown li');
for(let i=0;i<li.length;i++){
    li[i].onclick =function(){
    document.querySelector('.dropdown').style.display="none";

    video.playbackRate=isNaN(li[i].innerHTML)?1:li[i].innerHTML;
    console.log(li[i].innerHTML);
   
    // li[i].textContent;
    // speed.style.
}

}

// video.play();




//progress bar on click slide
progressBar.onclick=function(e){
    // console.log(e);
   if(!isDragging){
    progress.style.width=e.offsetX;
    video.currentTime= (e.offsetX/progressBar.offsetWidth) * video.duration;

   }
    /*
    0s=( progresswidth=0/totalwidth )seconds
    */
}
//drag slider functionality
let isDragging=false;

progress.addEventListener("mousedown",startDragging);
progress.addEventListener("mousemove",dragProgress);
progress.addEventListener("mouseup",stopDragging);
progress.addEventListener("mouseout",stopDragging);

//drag slide start
function startDragging(){
    isDragging=true;
}

//drag slide is dragging/mouse over it
function dragProgress(e){
    // console.log(e);
    console.log("outside",e.offsetX);
    if(isDragging){
        const progressBarWidth = progressBar.offsetWidth;//pb upto fill
        const clickOffset = e.offsetX;console.log(clickOffset);
        const newTime = (clickOffset/progressBarWidth) * video.duration;

        video.currentTime = newTime;
        // console.log(newTime);
        progress.style.width = (clickOffset/progressBarWidth) * 100 + "%";
        // isDragging=false;
    }
}


//drag slide end
function stopDragging(){
    isDragging=false;
}

function setTimer(timerElement,timeInSecNoDecimal){

    const minutes = Math.floor(timeInSecNoDecimal / 60);
    const seconds = timeInSecNoDecimal % 60;

    if(seconds <10){
        timerElement.innerText = minutes+":0"+seconds;
    }else{
        timerElement.innerHtml = minutes+":"+seconds;
    }

    
}
setTimer(end,Math.floor(video.currentTime));

video.addEventListener('timeupdate',function (){
   if(!isDragging){
    video.duration===video.currentTime?forwardPlay():null;

    const currentTimeTakeInSecNoDec = Math.floor(video.currentTime);
    const videoPlayedInPercentage = (video.currentTime/video.duration) * 100 + "%";//how much video played in%

    setTimer(start,currentTimeTakeInSecNoDec);
    progress.style.width=videoPlayedInPercentage;
   }
});


//large play btn in video play screen
largePlayBtnBox.onclick=function(){
    // largePlayBtn.style.display="none";
    largePlayBtn.classList.toggle('fa-play');
    playVideo();
}

// wrapperContainer.onclick=function(){
//     largePlayBtn.classList.toggle('fa-play');
//     playVideo();
// }


//volume
volume.value=50;
video.volume = 50/volume.max;
volume.onclick = function(){//volume.value=e.target.value
    video.volume = parseInt(volume.value)/parseInt(volume.max);

    // 0 to 1 volume
}

