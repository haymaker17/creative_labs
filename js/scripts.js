/* 

This is a email masking script to prevent spam. It's implemented like this:

href="javascript:sendMailTo('booking','haymaker','tv')" 

*/
function sendMailTo(name, company, domain) {
  locationstring = 'mai' + 'lto:' + name + '@' + company + '.' + domain;
  window.location.replace(locationstring);
}

//parallax scrolling
var scroll_window = $(window); 
var velocity = 0.2; 

function parallax(){ 
	var pos    = scroll_window.scrollTop(); 
	var height = scroll_window.height();


	$('.parallax').each(function() { 
		var element    = $(this); 
		var position   = element.data("position");
		var offset     = element.offset();
		var top        = offset.top;
		var offsetpos  = 170;

		if (position == 1) {
			offsetpos = 0;
		}
		var new_bg_pos = Math.round((top - pos) * velocity) - offsetpos;

		$(this).css('backgroundPosition', '50% ' + new_bg_pos + 'px'); 
	}); 
}; 



function fadeinElements() {
    /* Check the location of each desired element */
    $('.fadeinElement').each(function(i) {

        var height_of_object = $(this).outerHeight();
        var bottom_of_object = $(this).offset().top + height_of_object;
        var middle_of_object = bottom_of_object - (height_of_object/2);
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window > middle_of_object) {

            $(this).addClass("visible");

        }
        else {
        	//$(this).removeClass("visible");
        }

    });
}

function slideInElements() {
    /* Check the location of each desired element */
    $('.slideinElement').each(function(i) {

        var height_of_object = $(this).outerHeight();
        var bottom_of_object = $(this).offset().top + height_of_object;
        var middle_of_object = bottom_of_object - (height_of_object/2);
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window > middle_of_object) {

            $(this).addClass("visible");

        }
        else {
        	//$(this).removeClass("visible");
        }

    });
}




$(function(){

	parallax();
	fadeinElements();
	slideInElements();

	scroll_window.bind('scroll', function(){
		parallax();
		fadeinElements();
		slideInElements();
	});

})




