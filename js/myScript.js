$(document).ready(function(){
	$(".menubtn").on('click', function(){
    		$('#sideNav').animate({width: "100%"}, 500);
    });
    $(".closebtn").on('click', function(){
    		$('#sideNav').animate({width: "0"}, 500);
    });
    $('#services').addClass('animated fadeInUp');
    /*var services = document.getElementById("services");
    		services.className += " animated fadeInUp";*/

	window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
	    if (document.body.scrollTop > 133 || document.documentElement.scrollTop > 133) {
	        document.getElementById("name").style.display = "block";
	        document.getElementById("nav").style.position = "fixed";
	    } else {
	        document.getElementById("name").style.display = "none";
	        document.getElementById("nav").style.position = "relative";
	    }
	}
});