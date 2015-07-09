
			var COUNTAUDIOFILES = 12;
			var COUNTVIDEOAUDIOFILES = 8;
			var COUNTVIDEOFILES = 4;
			var VIDEOSUNLOCKED = 0;


			var playMusicBeispiel1 = false;
			var playMusicBeispiel2 = false;
			var playMusicBeispiel3 = false;

			window.onload = function () {
				for(var i = 1; i <= COUNTAUDIOFILES; i++){
					document.getElementById('audio'+i).muted = true;    
				}
				VIDEOSUNLOCKED = localStorage.getItem("unlocked");	
				for(var i = 1; i <= VIDEOSUNLOCKED; i++){
					videoSetVisible(i);
				}
				
				if (VIDEOSUNLOCKED > 0){
				document.getElementById("welcome").innerHTML = "Gratuliere, Sie haben bisher schon " + VIDEOSUNLOCKED + " Videos freigeschaltet.";
				} else{
				document.getElementById("welcome").innerHTML = "Sie haben bisher noch keine Videos freigeschaltet, lösen Sie die Quiz, es lohnt sich.";
				}
				
				
			};
			
			window.onhashchange = function(){
				stop();
				stopAllVideos();
				document.getElementById("musicInteractive1_btn").innerHTML = "Abspielen";
				document.getElementById("musicInteractive2_btn").innerHTML = "Abspielen";
				document.getElementById("musicInteractive3_btn").innerHTML = "Abspielen";
				playMusicBeispiel1 = false;
				playMusicBeispiel2 = false;
				playMusicBeispiel3 = false;
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

			function musicInteractive1(){
				if (playMusicBeispiel1 == false) {
					play(["audio1", "audio2", "audio3", "audio4"]);
					playMusicBeispiel1 = true;
					document.getElementById("musicInteractive1_btn").innerHTML = "Pause";
				}else {
					pause(["audio1", "audio2", "audio3", "audio4"]);
					playMusicBeispiel1 = false;
					document.getElementById("musicInteractive1_btn").innerHTML = "Abspielen";

				}
			}
		
			function musicInteractive2(){
				if (playMusicBeispiel2 == false) {
					play(["audio5", "audio6", "audio7", "audio8"]);
					playMusicBeispiel2 = true;
					document.getElementById("musicInteractive2_btn").innerHTML = "Pause";
				}else {
					pause(["audio5", "audio6", "audio7", "audio8"]);
					playMusicBeispiel2 = false;
					document.getElementById("musicInteractive2_btn").innerHTML = "Abspielen";

				}
			}
			
			function musicInteractive3(){
				if (playMusicBeispiel2 == false) {
					play(["audio9", "audio10", "audio11", "audio12"]);
					playMusicBeispiel2 = true;
					document.getElementById("musicInteractive3_btn").innerHTML = "Pause";
				}else {
					pause(["audio9", "audio10", "audio11", "audio12"]);
					playMusicBeispiel2 = false;
					document.getElementById("musicInteractive3_btn").innerHTML = "Abspielen";

				}
			}
			
			function ergebnis(){
													
				document.getElementById("ergebnis1").innerHTML = "Gratuliere sie haben das Quiz richtig gelöst. Bisher haben sie schon " + VIDEOSUNLOCKED + " Quiz gelöst und Videos freigeschaltet.";
				document.getElementById("ergebnis2").innerHTML = "Gratuliere sie haben das Quiz richtig gelöst. Bisher haben sie schon " + VIDEOSUNLOCKED + " Quiz gelöst und Videos freigeschaltet.";
				document.getElementById("ergebnis3").innerHTML = "Gratuliere sie haben das Quiz richtig gelöst. Bisher haben sie schon " + VIDEOSUNLOCKED + " Quiz gelöst und Videos freigeschaltet.";
				
				
			}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
