
			var COUNTAUDIOFILES = 4;
			var COUNTVIDEOAUDIOFILES = 8;
			var COUNTVIDEOFILES = 4;
			var VIDEOSUNLOCKED = 0;

			window.onload = function () {
				for(var i = 1; i <= COUNTAUDIOFILES; i++){
					document.getElementById('audio'+i).muted = true;    
				}
				VIDEOSUNLOCKED = localStorage.getItem("unlocked");	
				for(var i = 1; i <= VIDEOSUNLOCKED; i++){
					videoSetVisible(i);
				}
			};
			
			window.onhashchange = function(){
				stop();
				stopAllVideos();
			}
   
			function play(objects){
				for(var key in objects) {
					document.getElementById(objects[key]).play();
				}	
			}

			function  stopAllVideos(){
			for(var i = 1; i <= COUNTVIDEOFILES; i++){
					document.getElementById('video'+i).pause();
					document.getElementById('video'+i).currentTime = 0;		
				}
			}
			
			function stop(){
				for(var i = 1; i <= COUNTAUDIOFILES; i++){
					document.getElementById('audio'+i).pause();
					document.getElementById('audio'+i).currentTime = 0;	
					document.getElementById('audio'+i).muted = true;     					
				}
				for(var i = 1; i <= COUNTAUDIOFILES; i++){
					if(document.getElementById('xBtn'+i) != null ){
					document.getElementById('xBtn'+i).style.visibility = "visible";	
					document.getElementById('btn'+i).className = "col-md-1 off";  
					}
					if(document.getElementById('text'+i) != null ){
						document.getElementById('text'+i).style.visibility = "hidden";	
					}
				}
				for(var i = 1; i <= COUNTVIDEOAUDIOFILES; i++){
					document.getElementById('videoAudio'+i).pause();
					document.getElementById('videoAudio'+i).currentTime = 0;		
				}
			}

			function playVideoSounds(videoAudio, video){
				stop();							
				play([videoAudio, video]);
				document.getElementById(videoAudio).muted = false; 
			}
			
			function pause(objects){
				for(var key in objects) {
					document.getElementById(objects[key]).pause();
				}	
			}
			
			function switchAudio(id){
				if(document.getElementById('btn'+id).className == "col-md-1 off"){    
					document.getElementById('btn'+id).className = "col-md-1 on";     
					document.getElementById('audio'+id).muted = false; 
					document.getElementById('xBtn'+id).style.visibility = "hidden";
					//document.getElementById('text'+id).style.visibility = "visible";
							
				}else{                                                     
					document.getElementById('btn'+id).className = "col-md-1 off";     
					document.getElementById('audio'+id).muted = true;  
					document.getElementById('xBtn'+id).style.visibility = "visible";
					//document.getElementById('text'+id).style.visibility = "hidden";					
				}                                                                                 
			}           

			function videoSetVisible(i){
				document.getElementById("v"+i).style.visibility= "visible";
				document.getElementById("locked"+i).style.visibility= "hidden";
			}
			
			function unlockVideo(){
				if(VIDEOSUNLOCKED<=2)
				{
					VIDEOSUNLOCKED++;
					localStorage.setItem("unlocked", VIDEOSUNLOCKED);
					videoSetVisible(VIDEOSUNLOCKED);
				}
			}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
