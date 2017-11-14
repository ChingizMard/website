// $(document).ready(function(){
// 	var itemToScroll = $('#firstBackground'); //First image
// 	var secondItemToScroll = $('#secondBackground');
// 	var currentPos = parseInt(itemToScroll.css('top'));
// 	var secondCurrentPos = parseInt(secondItemToScroll.css('top'));
			
// 	$( window ).scroll(function() {	
// 	  	var yPos = currentPos-($(window).scrollTop() / itemToScroll.data('speed'));
// 	  	var yPosTwo = secondCurrentPos-($(window).scrollTop() / secondItemToScroll.data('speed'));
// 	  	var coords = yPos + 'px';
// 	    itemToScroll.css({ top: coords });
// 	    var coordsTwo = yPosTwo + 'px';
// 	    secondItemToScroll.css({ top: coordsTwo });

// 	});
// });

/*

$(document).ready(function(){
	var itemToScroll = $('#firstBackground'); //First image
	
	console.log(itemToScroll.data('speed'));
	var currentPos = parseInt(itemToScroll.css('top'));
			
	$( window ).scroll(function() {	
	  	var yPos = currentPos-($(window).scrollTop() / itemToScroll.data('speed'));
	  	console.log(yPos);
	  	var coords = yPos + 'px';
	    itemToScroll.css({ top: coords });
	});
});
*/