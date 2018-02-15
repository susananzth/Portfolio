
    function openNav() {
      document.getElementById("sideNav").style.width = "100%";
      }

      function closeNav() {
          document.getElementById("sideNav").style.width = "0";
      }

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
