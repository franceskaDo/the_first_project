
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var options = {
    	outDuration:2000
    };
    var instances = M.Carousel.init(elems, options);
  });
  // Or with jQuery

  $(document).ready(function(){
    $('.carousel').carousel();
  });