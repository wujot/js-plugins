'use strict';
(function(){ 


	var templateList = document.getElementById('template-slide-list').innerHTML;
	var templateItem = document.getElementById('template-slide-item').innerHTML;
	
	Mustache.parse(templateItem); 
	
	var listItems = '';
	
	for(var i = 0; i < slides.length; i++){
		listItems += Mustache.render(templateItem, slides[i]);
	}
	

	var slideList = Mustache.render(templateList, {slides: listItems});
	
	
	results.insertAdjacentHTML('beforeend', slideList);


var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  hash: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options

});

var progressBar = document.querySelector('.progress-bar');

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

// Definujemy funkcję initMap w zakresie globalnym (czyli jako właściwość obiektu window).
  	window.initMap = function() {
		
		// Zapisujemy w zmiennej obiekt zawierający współrzędne geograficzne.
		var uluru = {lat: 51.539011, lng: -0.142555};
		
		// W zmiennej map zapisujemy nową instancję obiektu Map. 
		var map = new google.maps.Map(document.getElementById('map'), {
			// Podajemy opcje mapy, np. zoom i punkt wycentrowania mapy.
			zoom: 4,
			center: uluru
		});

		for (var i = 0; i < slides.length; i++) {

		    var marker = new google.maps.Marker({
		      position: slides[i].coords,
		      map: map
		    });

		    google.maps.event.addListener(marker, 'click', (function (i) {
		      return function () {
		        flkty.select(i);
		      }
		    })(i));
		  };
	}	
	
})(); 