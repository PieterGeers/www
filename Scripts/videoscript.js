var videos = ["Videos/video1.mp4","Videos/video2.mp4","Videos/video3.mp4"];
        
        var fillBar = document.getElementById("fill");
        
        var currentTime = document.getElementById("currentTime");

        var video = document.getElementById("currentVideo");
        var currentVideo = 0;    // it point to the current video
        
        window.onload = playVideo();   // it will call the function playVideo when window is load
        
        function playVideo(){
            
            video.src = videos[currentVideo];  //set the source of 0th video 
                    
            video.play();    // play the video
        }
        
        function playOrPauseSong(){
            
            if(video.paused){
                video.play();
                $("#play img").attr("src","Resources/Pause.png");
            }
            else{
                video.pause();
                $("#play img").attr("src","Resources/Play.png");
            }
        }
        
        video.addEventListener('timeupdate',function(){ 
            
            var position = video.currentTime / video.duration;
            
            fillBar.style.width = position * 100 +'%';

            convertTime(Math.round(video.currentTime));
        });
        
        function convertTime(seconds)
        {
        	var min = Math.floor(seconds / 60);
        	var sec = seconds % 60;

        	min = (min < 10) ? "0" + min : min;
        	sec = (sec < 10) ? "0" + sec : sec;
         	currentTime.textContent = min + ":" + sec;

         	totalTime(Math.round(video.duration));
        }

        function totalTime(seconds)
        {
        	var min = Math.floor(seconds / 60);
        	var sec = seconds % 60;

        	min = (min < 10) ? "0" + min : min;
        	sec = (sec < 10) ? "0" + sec : sec;
         	currentTime.textContent +=  "/" + min + ":" + sec;
        }
    
        function next(){
            
            currentVideo++;
            if(currentVideo > 2){
                currentVideo = 0;
            }
            playVideo();
            $("#play img").attr("src","Resources/Pause.png");
        }
    
        function pre(){
            
            currentVideo--;
            if(currentVideo < 0){
                currentVideo = 2;
            }
            playVideo();
            $("#play img").attr("src","Resources/Pause.png");
        }