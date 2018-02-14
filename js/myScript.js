$(function(){
        $('a.smoothScroll').smoothScroll({
          offset: -80,		  
		  scrollTarget: $(this).val()
	   });
       
       // Waypoints
       $('.about-me').waypoint(  
        function(direction) {
        if (direction ==='down') {            
            var wayID = $(this).attr('id');            
        } else {
            var previous = $(this).prev();
            var wayID = $(previous).attr('id');                    
        }
            $('.current').removeClass('current');
            $('#nav a[href=#'+wayID+']').addClass('current');
        }, { offset: '40%' });
       
       
       
       /// StickNav  
       var stickyNavTop = $('.nav').offset().top;  
  
        var stickyNav = function(){  
        var scrollTop = $(window).scrollTop();  
       
        if (scrollTop > stickyNavTop) {   
            $('.nav').addClass('fixed-nav');  
        } else {  
            $('.nav').removeClass('fixed-nav');   
        }  
    };       
    stickyNav(); 
       $(window).scroll(function() {
            stickyNav();  
        });

    function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    } 
    });