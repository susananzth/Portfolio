$(document).ready(function(){
	$(".menubtn").on('click', function(){
    	$('#sideNav').animate({width: "100%"}, 500);
    });
    $(".closebtn").on('click', function(){
    	$('#sideNav').animate({width: "0"}, 500);
    });
    $(".menu-link").on('click', function(){
    	$('#sideNav').animate({width: "0"}, 500);
    });
	window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
    	if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
			$('.services-speed').addClass('animated-0-8s fadeInUp');
		    $('.services-responsive').addClass('animated-0-9s fadeInUp');
    	}
    	if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
		    $('.services-dynamic').addClass('animated-0-9s fadeInUp');
		    $('.services-intuitive').addClass('animated-1s fadeInUp');
    	}
    	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
		    $('.services-love').addClass('animated-1-1s fadeInUp');
    	}
	    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
	        document.getElementById("name").style.display = "block";
	        document.getElementById("nav").style.position = "fixed";
	    } else {
	        document.getElementById("name").style.display = "none";
	        document.getElementById("nav").style.position = "relative";
	    }
	}
	$('form').on('submit', sendForm);
        function sendForm(ev) {
            ev.preventDefault();
        }
});