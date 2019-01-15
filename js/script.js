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

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});




})(); 