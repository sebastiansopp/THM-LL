

			window.onload = function () {
				document.getElementById('a1').muted = true;       
				document.getElementById('a2').muted = true;       
				document.getElementById('a3').muted = true;
				//document.getElementById('hai').muted = true;
				document.getElementById('a4').muted = true;
				document.getElementById('a5').muted = true;

			};
			
			window.onhashchange = function(){
				stop();
			}
   
			function play(){
				document.getElementById('a1').play();
				document.getElementById('a2').play();
				document.getElementById('a3').play();

			}

			function stop(){
				for(var i = 1; i <= 5; i++){
				document.getElementById('a'+i).pause();
				document.getElementById('a'+i).currentTime = 0;		
					document.getElementById('btn'+i).className = "col-md-2 btn btn-default";     
				}
			}
			
			function playVideoSounds(i){
				document.getElementById('video').play();
				stop();
				document.getElementById('a'+i).play();
				farbe(i);
			}
			
			function pause(){
				document.getElementById('a1').pause();
				document.getElementById('a2').pause();
				document.getElementById('a3').pause();
				document.getElementById('a4').pause();
				document.getElementById('a5').pause();
			}
			
			function farbe(id){
				if(document.getElementById('btn'+id).className == "col-md-2 btn btn-default"){    
					document.getElementById('btn'+id).className = "col-md-2 btn btn-warning";     
							document.getElementById('a'+id).muted = false;                        
				}else{                                                                            
					document.getElementById('btn'+id).className = "col-md-2 btn btn-default";     
							document.getElementById('a'+id).muted = true;                         
				}                                                                                 
			}                                                                                     
		


