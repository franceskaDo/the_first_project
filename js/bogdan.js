document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var options = {
    	outDuration: 2000,
    	inDuration: 500,
    	onOpenEnd: function() {
		    var elems = document.querySelectorAll('.carousel');
		    var options={
		    	duration:100,
				indicators:true,
				dist: 0,
				padding: 30
		    };
		    var instances = M.Carousel.init(elems, options);
    	}
    };
    var instances = M.Collapsible.init(elems, options);
  });

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var options={
    	duration:100,
		indicators:true
    };
    var instances = M.Carousel.init(elems, options);
  });