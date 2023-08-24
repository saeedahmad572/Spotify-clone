console.log("welcome to spotify");
//initialize the variables
let songindex = 0;
let audioElement = new Audio('songs/${songindex}.mp3');
let masterplay = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('giff');
let mastersong = document.getElementById('mastersong');
let songItems = Array.from(document.getElementsByClassName('songItems'));

let songs = [
    {songname:"Baari by bilal saeed" , filePath: "songs/1.mp3" , coverPath:"covers/cover1.jpg"},
    {songname:"Afreen Afreen by Rahat fateh ali" , filePath: "songs/2.mp3" , coverPath:"covers/cover3.jpg"},
    {songname:"Yaad hay na by imran hashmi " , filePath: "songs/3.mp3" , coverPath:"covers/cover3.jpg"},
    {songname:"Ae dil hay mushkil by arjit" , filePath: "songs/4.mp3" , coverPath:"covers/cover4.jpg"},
    {songname:"Jo tu mera humdard hay by arjit" , filePath: "songs/5.mp3" , coverPath:"covers/cover3.jpg"},
    {songname:"Dill sambhal ja zara" , filePath: "songs/6.mp3" , coverPath:"covers/cover6.jpg"},
    {songname:"Tera yar hon mn" , filePath: "songs/7.mp3" , coverPath:"covers/cover6.jpg"},
    {songname:"Ach chalta hon duaon mn yad<" , filePath: "songs/8.mp3" , coverPath:"covers/cover6.jpg"},
    {songname:"wey kabera maan ja" , filePath: "songs/9.mp3" , coverPath:"covers/cover6.jpg"},
    {songname:"Keseriya tera ishq hay piya" , filePath: "songs/10.mp3" , coverPath:"covers/cover6.jpg"},
    {songname:"Agar tum sath ho arjit" , filePath: "songs/11.mp3" , coverPath:"covers/cover6.jpg"},
    {songname:"O Bedardiya o yar bedardiya oh" , filePath: "songs/12.mp3" , coverPath:"covers/cover6.jpg"},
    {songname:"O Bedardiya o yar bedardiya oh" , filePath: "songs/13.mp3" , coverPath:"covers/cover6.jpg"},
    {songname:"Keseriya tera ishq hay piya" , filePath: "songs/14.mp3" , coverPath:"covers/cover6.jpg"},
    
]

songItems.forEach((element, i)=>{
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songname")[0].InnerText = songs[i].songname;

})
//hadle play/pause click
 masterplay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currenttime<=0){
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    }
    else {
    audioElement.pause();
    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
  }
    })
//listen to events
audioElement.addEventListener ('timeupdate',()=>{
     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
     progressbar.value = progress;

})

  progressbar.addEventListener('change', ()=>{
    audioElement.currentTime = progressbar.vlaue * audioElement.duration/100;
  })

   const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((Element)=>{
      Element.classList.remove('fa-pause-circle');
      Element.classList.add('fa-play-circle');
    })
  }
   
  Array.from(document.getElementsByClassName('songitemplay')).forEach((Element)=>{
    Element.addEventListener('click',(e)=>{
      makeallplays();
      gif.style.opacity = 1;
      songindex = parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src = `songs/${songindex}.mp3`;
      mastersong.innerText = songs[songindex].songname;
      audioElement.currentTime= 0;
      audioElement.play();
      masterplay.classList.remove('fa-play-circle');
      masterplay.classList.add('fa-pause-circle');

    })
  })
  document.getElementById('next').addEventListener('click', ()=>{
    if (songindex>=15){
      songindex = 0;
    }
    else { songindex +=1;
    }
    audioElement.src = `songs/${songindex}.mp3`;
    mastersong.innerText = songs[songindex].songname;
      audioElement.currentTime= 0;
      audioElement.play();
      masterplay.classList.remove('fa-play-circle');
      masterplay.classList.add('fa-pause-circle');
  })
  document.getElementById('previous').addEventListener('click', ()=>{
    if (songindex<=0){
      songindex = 0;
    }
    else{ songindex -=1;
    }
    audioElement.src = `songs/${songindex}.mp3`;
    mastersong.innerText = songs[songindex].songname;
      audioElement.currentTime= 0;
      audioElement.play();
      masterplay.classList.remove('fa-play-circle');
      masterplay.classList.add('fa-pause-circle');
  })



