var video = document.getElementById("myVideo");

	function myFunction() {
		  if (video.paused) {
		    video.play();
		    btn.innerHTML = "Pause";
		  } else {
		    video.pause();
		  }
	}

$(document).ready(function(){

	$(window).scroll(function() {
	    $(".slideanim").each(function(){
	      var pos = $(this).offset().top;

	      var winTop = $(window).scrollTop();
	        if (pos < winTop + 600) {
	          $(this).addClass("slide");
	        }
	 	});
  	});
});