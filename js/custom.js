$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets
});

$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/background1.jpg",
	 		 "images/background2.jpg",
			 "images/background3.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
})
