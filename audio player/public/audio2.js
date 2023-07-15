//fetch all element from DOM that we will manipulate
const body= document.body;//use to update body bg image
const banner= document.querySelector(".banner") ;//use to update player banner bg image
const artistProfile= document.querySelector(".banner img") ;//use to update artist profile image
const songName= document.querySelector(".song-detail h2") ;//use to update song name
const artistName= document.querySelector(".song-detail p") ;//use to update artist name
const shuffle= document.querySelector(".controls-btn i:nth-of-type(1)") ;//use to update control
const backward= document.querySelector(".controls-btn i:nth-of-type(2)") ;//use to update control
const play= document.querySelector(".controls-btn i:nth-of-type(3)") ;//use to update control
// const pause= document.querySelector(".controls-btn i:nth-of-type(4)") ;//use to update control
const forward= document.querySelector(".controls-btn i:nth-of-type(4)") ;//use to update control
const redo= document.querySelector(".controls-btn i:nth-of-type(5)") ;//use to update control
const progressBar= document.querySelector(".progress") ;//use to update slider
const progress= document.querySelector(".progress .bar") ;//use to update slider
const timerStart= document.querySelector(".progress-timer small:nth-child(1)");//use to update timer
const audioLength= document.querySelector(".progress-timer small:nth-child(2)") ;//use to update timer
const like= document.querySelector(".like-unlike i:nth-child(1)") ;//use to update like
const unLike= document.querySelector(".like-unlike i:nth-of-type(2)");//use to update unlike

const progressB= document.querySelector(".progress #slider") ;//use to update slider

const volume= document.querySelector(".like-unlike .volume input");//use to update unlike



//hide pause control
// pause.style.display='none;'

//create an array of songs
const tracks = [
    {
        songName:"Hurts So Good",
        artistName:"Astrid S",
        artistImgSrc:"./assets/image/Astrid S.jpg",
        bannerSrc:"./assets/image/Hurts So Good.jpg",
        trackSrc:"./assets/music/Astrid S  Hurts So Good.mp3",
    },
    {
        songName:"SIX FEET UNDER Lyrics",
        artistName:"Billie Eilish  ",
        artistImgSrc:"./assets/image/Billie Elilish.jpg",
        bannerSrc:"./assets/image/SIX FEET UNDER.jpg",
        trackSrc:"./assets/music/Billie Eilish  SIX FEET UNDER Lyrics.mp3",
    },
    {
        songName:"Make You Mine Put Your Hand in ",
        artistName:"PUBLIC",
         artistImgSrc:"./assets/image/PUBLIC.jpg",
        bannerSrc:"./assets/image/Make You Mine Put Your Hand in.jpg",
        trackSrc:"./assets/music/PUBLIC  Make You Mine Put Your Hand in .mp3",
    },
    {
        songName:"Dancing With Your Ghost Li",
        artistName:"Sasha Sloan",
        artistImgSrc:"./assets/image/sasha sloan.jpg",
        bannerSrc:"./assets/image/Dancing With Your Ghost Li.jpg",
        trackSrc:"./assets/music/Sasha Sloan  Dancing With Your Ghost Li.mp3",
    },
    {
        songName:"STAY",
        artistName:"The Kid LARI and Justin Bibber ",
        artistImgSrc:"./assets/image/justin  and kid.jpg",
        bannerSrc:"./assets/image/stay.jpg",
        trackSrc:"./assets/music/The Kid LAROI Justin Bieber  STAY Offic.mp3",
    },
]

let count=0;

//create audio element
const audio = document.createElement('audio');
audio.src=tracks[count].trackSrc;
// body.style.backgroundImage=`url(${tracks[count].bannerSrc})`;
banner.style.backgroundImage=`url('${tracks[count].bannerSrc}')`;
artistProfile.src=tracks[count].artistImgSrc;
songName.innerText=tracks[count].songName;
artistName.innerText=tracks[count].artistName;


// audioLength.innerText=Math.floor(audio.duration);





//create func to play audio
//can't use same identifier also in func
function playMusic(){
    // click to play 
    console.log("music is playing...");
    if(play.classList[1]==='fa-play'){
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
        audio.play();
    }else{
        // click to pause 
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
        audio.pause();
    }
}

// add event listener to play control and play music
play.addEventListener('click',playMusic);

// make func to go to next music

function forwardPlay(){
    // document.querySelector(".box").classList.add("animation");

    console.log("forward control is click");
    // play.classList.remove('fa-pause');
    // play.classList.add('fa-play');
    // audio.pause();
   

    if(count===tracks.length-1){
        count=0;
    }else{
        count++;
    }
    audio.src=tracks[count].trackSrc;
    // body.style.backgroundImage=`url(${tracks[count].bannerSrc})`;
    banner.style.backgroundImage=`url('${tracks[count].bannerSrc}')`;
    artistProfile.src=tracks[count].artistImgSrc;
    songName.innerText=tracks[count].songName;
    artistName.innerText=tracks[count].artistName;
    
    // audioLength.innerText=Math.floor(audio.duration);
    
     //when directly click on next with click on play btn
     if(play.classList[1]==='fa-play'){
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
        // audio.play();
    }
    audio.play();

   
}

forward.addEventListener('click',forwardPlay);

// make func to go to back music

function backwardPlay(){
    console.log("backward control is click");
    // document.querySelector(".box").classList.add("animation");

    // play.classList.remove('fa-pause');
    // play.classList.add('fa-play');
    // audio.pause();

    if(count===0){
        count=tracks.length-1;
    }else{
        count--;
    }
    audio.src=tracks[count].trackSrc;
    // body.style.backgroundImage=`url(${tracks[count].bannerSrc})`;
    banner.style.backgroundImage=`url('${tracks[count].bannerSrc}')`;
    artistProfile.src=tracks[count].artistImgSrc;
    songName.innerText=tracks[count].songName;
    artistName.innerText=tracks[count].artistName;
    
    audioLength.innerText=Math.floor(audio.duration);
    
     //when directly click on next with click on play btn
     if(play.classList[1]==='fa-play'){
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
        // audio.play();
    }
    // audio.play();
    audio.play();
}

backward.addEventListener('click',backwardPlay);



//redo functionality
function repeatMusic(){
    audio.currentTime=0;
 //set time to timerStart
//  setTime(timerStart,0);
//     progress.style.width='0%';
   
audio.play();
if(play.classList[1]==='fa-play'){
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
    audio.play();
}

}
redo.addEventListener('click',repeatMusic);

// console.log(slider.value);


// slider timer and timeline
function setTime(output,input){//again again set time change//input = seconds,output=timerStart element
    //minutes calculate
    const minutes = Math.floor(input / 60);//2.9=return 2,remove decimal part
    const seconds = Math.floor(input % 60);
    /*61.223 second
      m=1 (floor use)
      s=1 (floor use)

    */
// console.log(minutes," ",seconds,input);
    if(seconds<10){
        output.innerText = minutes + ":0" + seconds;
    }else{
        output.innerText = minutes + ":" + seconds;
    }

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
        const newTime = (clickOffset/progressBarWidth) * audio.duration;

        audio.currentTime = newTime;
        // console.log(newTime);
        progress.style.width = (clickOffset/progressBarWidth) * 100 + "%";
        // isDragging=false;
    }
}


//drag slide end
function stopDragging(){
    isDragging=false;
}



/**
 * //drag slide start
progress.onmousedown = function(){
    isDragging=true;
}

//drag slide is dragging/mouse over it
progress.onmouseover = function(){
    if(isDragging){
        const progressWidth = this.offsetWidth;//pb upto fill
    }
}


//drag slide end
progress.onmouseup = function(){
    isDragging=false;
}
 */




//when-when audio track time change this event get trigger
audio.addEventListener('timeupdate',()=>{
// //set audio length time
// console.log(audio.duration);

if(!isDragging){
    if(audio.currentTime===audio.duration){
        forwardPlay();
    }
    setTime(audioLength,audio.duration);
    
        const currentAudioTime = Math.floor(audio.currentTime);//234.433 == 234 SECONDS
        const timePercentage = (currentAudioTime/audio.duration)*100 + "%";
    
        //set time to timerStart
        setTime(timerStart,currentAudioTime);
    
        progress.style.width=timePercentage;
    
}

    //RANGE INPUT WAY
    // progressB.value=audio.currentTime * (parseInt(progressB.max)/audio.duration);
    // console.log(audio.currentTime * (parseInt(progressB.max)/audio.duration));
    //parseInt convert sting into number and remove decimals
    //Math.floor only remove decimals


    // const =parseInt(progressB.max)/audio.duration;
})



progressBar.onclick=function(e){
    // console.log(e);
   if(!isDragging){
    progress.style.width=e.offsetX;
    audio.currentTime= (e.offsetX/progressBar.offsetWidth) * audio.duration;

   }
    /*
    0s=( progresswidth=0/totalwidth )seconds
    */
}

//  RANGE INPUT WAY
// progressB.value='0';
// progressB.onclick=function(e){
//     // console.log(e);
//     progressB.value=Math.floor(parseInt(progressB.value)+(100/audio.duration));
//     audio.currentTime = (progressB.value/progressB.max) * audio.duration;
    
//     // console.log(progressB.value);
    
//     /*
//     0s=( progresswidth=0/totalwidth )seconds
//     */
// }



//linkes

like.onclick=function(){
    like.classList.toggle("aqua");//classList an array having all class in it
}

unLike.onclick=function(){
    unLike.classList.toggle("aqua");
}


//volume
volume.value=50;
audio.volume = 50/volume.max;
volume.onclick = function(){
    audio.volume = parseInt(volume.value)/parseInt(volume.max);

    // 0 to 1 volume
}


//shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));//0.0 to 1.0 any value multiply output less than that any value  .9 * 4=3.6,.9 * 5=4.5 max , single digit max <multiply value
      [array[i], array[j]] = [array[j], array[i]];

      //temp=arr[j]
      //arr[i]=arr[j]
      //arr[j]=temp;
    }
    return array;
  }

shuffle.onclick=function(){
shuffleArray(tracks);
shuffle.style.color="aqua";
}



/**

1.use progress for mousemove ,
 pointer in progress slider is important with  it help we will move in forward with mouse because it is in 5px right from progress

2. use progressBar for mousemove

mousemove event trigger each time when an element area move karta hai mouse



mousedown than work:
each time we move left or right it change current time of audio and than an event updateTime automatically call and set progress

mouse up drag stop:
another we can set at time when we change current time of audio so it show like moving progress pointer progress

mousemove we can CREATE OWN MANUALLY DRAG FEATURE
--> PARENT CONTAINER TOWARD MOVE ,offsetX USE
*/


//step to create player
/**
 * 1. create audio element
 * 2. using audio obj time manage
 * 3. first create an func convert time/duration if track in min:sec
 * 4. use timeUpdate event to change timerStart with currentTime of audio change
  
    draggable slider bar is an functionality
*/