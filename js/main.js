
var
  video = document.getElementById('vid'),
  totalTime = document.getElementById('vidRange'),
  playPause = document.getElementById('pauseBtn'),
  startBtn = document.getElementById('startBtn'),
  rewind = document.getElementById('backBtn'),
  forward = document.getElementById('forBtn'),
  endBtn = document.getElementById('endBtn'),
  stopBtn = document.getElementById('stopBtn'),
  mute = document.getElementById('muteBtn'),
  speed = document.getElementById('speedRange'),
  volume = document.getElementById('volRange'),
  curSpeed = document.getElementById('curSpeed'),
  curDur = document.getElementById('curDur'),
  minute = 0,

  TIME_STEP = 5,
  vol = 0;

  const formatTime = (seconds) =>{
    seconds = Math.round(seconds);
    var minutes = 0;
    if (seconds>60){
      minutes = Math.floor(seconds/60);
      seconds = (seconds - (minutes * 60));
    } else{
      minutes = '00';
      seconds = seconds;
    }

    if(seconds < 10){
      seconds = '0' + seconds;
    }
    return minutes + ':' + seconds;
  }


  playPause.addEventListener('click', function(){
    if(video.paused || video.ended){
      video.play();
      playPause.innerText = "PAUSE";
    } else {
      video.pause();
      playPause.innerText = "PLAY";
    }
  });

  video.addEventListener('click', function(){
    if(video.paused || video.ended){
      video.play();
      playPause.innerText = "PAUSE";
    } else{
      video.pause();
      playPause.innerText = "PLAY";
    }
  });

  stopBtn.addEventListener('click', function(){
    video.pause();
    video.currentTime = 0;
    playPause.innerText = "PLAY";
  });

  startBtn.addEventListener('click', function(){
    video.currentTime = 0;
  });

  endBtn.addEventListener('click', function(){
    video.currentTime = video.duration;
    playPause.innerText = "PLAY";
  });

  backBtn.addEventListener('click', function(){
    video.currentTime -= TIME_STEP;
  });

  rewind.addEventListener('click', function(){
    video.currentTime -= TIME_STEP;
  });

  forward.addEventListener('click', function(){
    video.currentTime += TIME_STEP;
  });

  mute.addEventListener('click', function(){
    if(video.volume != 0){
      video.volume = 0;
      this.innerText = "UNMUTE"
    } else {
      video.volume = volume.value;
      this.innerText = "MUTE"
    }
  });

  volume.addEventListener('change', function(){
    video.volume = this.value;
  });



  totalTime.addEventListener('change', function(){
    video.currentTime = this.value;
  });

  speed.addEventListener('change', function(){
    video.playbackRate = this.value;
    curSpeed.innerText = speed.value;
  });

  video.addEventListener('timeupdate', function(){
    curDur.innerText = formatTime(video.currentTime);
    totalTime.value = video.currentTime;
  });

  video.addEventListener('play', function(){
    // curDur.innerText = formatTime(video.duration);
    // curDur.innerText = formatTime(video.duration);
  })



