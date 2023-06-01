const trackSrc=[
    {
        src:"All Of Me.mp3",
        name:'m'
    },
    {
        src:"",
        name:'m'
    },
    {
        src:"All Of Me.mp3",
        name:'m'
    },
    {
        src:"All Of Me.mp3",
        name:'m'
    },
    {
        src:"All Of Me.mp3",
        name:'m'
    },
    {
        src:"All Of Me.mp3",
        name:'m'
    },
  ]

  const audio = document.getElementsByTagName('audio');//arrays,elements
 console.log(audio);
 const progress = document.querySelector('progress');//arrays,elements
 console.log(progress);
 const start = document.querySelector('#timer-start');//arrays,elements
 const end = document.querySelector('#timer-end');//arrays,elements

 start.innerHTML=audio[0].currentTime;
 end.innerHTML=audio[0].duration;
 const playBtn = document.getElementById('play');
  playBtn.addEventListener('click',function(){
    console.log("print");
//    audio.setAttribute("src",trackSrc[0]);

if(playBtn.classList[1]==='fa-play'){
    playBtn.classList.remove('fa-play');
    playBtn.classList.add('fa-pause');
    const stepInProgress=100/audio[0].duration;
       audio[0].play();
       var interval=setInterval(function(){
        progress.value+=stepInProgress;
        
 start.innerHTML=parseFloat(audio[0].currentTime/60);
       },1000)

}else{
    playBtn.classList.remove('fa-pause');
    playBtn.classList.add('fa-play');
       audio[0].pause();
}


  });