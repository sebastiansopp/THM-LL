
			var COUNTAUDIOFILES = 5;
			var COUNTVIDEOFILES = 1;

			window.onload = function () {
				for(var i = 1; i <= COUNTAUDIOFILES; i++){
				document.getElementById('a'+i).muted = true;       
				}
			};
			
			window.onhashchange = function(){
				stop();
			}
   
			function play(objects){
				for(var key in objects) {
					document.getElementById(objects[key]).play();
				}	
			}

			function stop(){
				for(var i = 1; i <= COUNTAUDIOFILES; i++){
					document.getElementById('a'+i).pause();
					document.getElementById('a'+i).currentTime = 0;		
				}
				for(var i = 1; i <= 3; i++){
					document.getElementById('xBtn'+i).style.visibility = "visible";	
				}
			}

			function playVideoSounds(i){
				stop();
				play(["a"+i, "video"]);
				document.getElementById('a'+i).muted = false; 
			}
			
			function pause(objects){
				for(var key in objects) {
					document.getElementById(objects[key]).pause();
				}	
			}
			
			function farbe(id){
				if(document.getElementById('btn'+id).className == "col-md-1 off"){    
					document.getElementById('btn'+id).className = "col-md-1 on";     
					document.getElementById('a'+id).muted = false; 
					document.getElementById('xBtn'+id).style.visibility = "hidden";
							
				}else{                                                     
					document.getElementById('btn'+id).className = "col-md-1 off";     
					document.getElementById('a'+id).muted = true;  
					document.getElementById('xBtn'+id).style.visibility = "visible";	
				}                                                                                 
			}                                                                                     
		


