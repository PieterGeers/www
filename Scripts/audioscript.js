var songs = ["Songs/Song1.mp3","Songs/Song2.mp3","Songs/Song3.mp3"];
        
        var songTitle = document.getElementById("songTitle");
        var fillBar = document.getElementById("fill");
        
        var currentTime = document.getElementById("currentTime");

        var song = new Audio();
        var currentSong = 0;    // it point to the current song
        
        window.onload = playSong;   // it will call the function playSong when window is load
        
        function playSong(){
            
            song.src = songs[currentSong];  //set the source of 0th song 
            
            songTitle.textContent = songs[currentSong]; // set the title of song
            
            song.play();    // play the song
        }
        
        function playOrPauseSong(){
            
            if(song.paused){
                song.play();
                $("#play img").attr("src","Resources/Pause.png");
            }
            else{
                song.pause();
                $("#play img").attr("src","Resources/Play.png");
            }
        }
        
        song.addEventListener('timeupdate',function(){ 
            
            var position = song.currentTime / song.duration;
            
            fillBar.style.width = position * 100 +'%';

            convertTime(Math.round(song.currentTime));
        });
        
        function convertTime(seconds)
        {
        	var min = Math.floor(seconds / 60);
        	var sec = seconds % 60;

        	min = (min < 10) ? "0" + min : min;
        	sec = (sec < 10) ? "0" + sec : sec;
         	currentTime.textContent = min + ":" + sec;

         	totalTime(Math.round(song.duration));
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
            
            currentSong++;
            if(currentSong > 2){
                currentSong = 0;
            }
            playSong();
            $("#play img").attr("src","Resources/Pause.png");
        }
    
        function pre(){
            
            currentSong--;
            if(currentSong < 0){
                currentSong = 2;
            }
            playSong();
            $("#play img").attr("src","Resources/Pause.png");
        }